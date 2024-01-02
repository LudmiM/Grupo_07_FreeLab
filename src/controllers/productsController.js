const data = require('../data');
const crypto = require('crypto');

// Función para obtener el último ID presente en el JSON
function getLastProductId() {
  const products = data.leerJSON('products');
  const lastProduct = products.servicios[products.servicios.length - 1];
  return lastProduct ? lastProduct.id : 0;
}

// Función para crear un nuevo producto con ID consecutivo
function product(name, description, skills, portfolio, redes_sociales, category, price) {
  this.id = getLastProductId() + 1;
  this.name = name;
  this.description = description;
  this.skills = skills;
  this.portfolio = portfolio;
  this.redes_sociales = redes_sociales;
  this.category = category;
  this.price = price;
  this.image = [];
}

const updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, description, skills, portfolio, redes_sociales, category, price } = req.body;
  const files = req.files;

  const products = data.leerJSON('products');
  const index = products.servicios.findIndex((p) => p.id == id);

  if (index !== -1) {
    const updatedProduct = {
      id,
      name,
      description,
      skills,
      portfolio,
      redes_sociales,
      category,
      price,
    };

    if (files && files.length > 0) {
      const fileNames = files.map(file => file.originalname);
      updatedProduct.image = fileNames; // Save array of file names
    }

    products.servicios[index] = updatedProduct;
    data.escribirJSON(products, 'products');
    
    // Cambia la redirección a la página de administrador
    res.redirect('/admin');
  } else {
    res.status(404).send('Producto no encontrado');
  }
};

const addPost = (req, res) => {
  const { name, description, skills, portfolio, redes_sociales, category, price } = req.body;
  const files = req.files;

  const newProduct = new product(name, description, skills, portfolio, redes_sociales, category, price);

  if (files && files.length > 0) {
    const fileNames = files.map(file => file.originalname);
    newProduct.image = fileNames; // Save array of file names
  }

  const products = data.leerJSON('products');
  products.servicios.push(newProduct);
  data.escribirJSON(products, 'products');

  return res.redirect('/admin');
};

module.exports = {
  detail: (req, res) => res.render('products/productDetail'),
  detailPost: (req, res) => res.render('products/productDetailPost'),
  formProduct: (req, res) => res.render('products/product-create'),
  edit: (req, res) => {
    const { id } = req.params;
    const product = data.leerJSON('products').servicios.find((p) => p.id == id);
    return res.render('products/product-edit', { product });
  },
  addPost,
  updateProduct,
};

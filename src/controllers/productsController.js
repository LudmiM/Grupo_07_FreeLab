// productsController.js
const data = require('../data');
const crypto = require('crypto');
const {existsSync,unlinkSync} = require('fs');
const path = require('path');

const updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, description, skills, portfolio, redes_sociales, category, price } = req.body;
  const files = req.files;

  const products = data.leerJSON('products');
  const index = products.servicios.findIndex((p) => p.id == id);

  if (index !== -1) {
    const updatedProduct = {
      id: parseInt(id), // Convertir el id a número
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

  const products = data.leerJSON('products');

  // Obtener el último id en la lista actual
  const lastId = products.servicios.length > 0 ? parseInt(products.servicios[products.servicios.length - 1].id) : 0;

  // Crear un nuevo id consecutivo
  const newId = lastId + 1;

  function product(name, description, skills, portfolio, redes_sociales, category, price) {
    this.id = newId; // No convertir a cadena para que sea un número
    this.name = name;
    this.description = description;
    this.skills = skills;
    this.portfolio = portfolio;
    this.redes_sociales = redes_sociales;
    this.category = category;
    this.price = price;
  }

  const newProduct = new product(name, description, skills, portfolio, redes_sociales, category, price);

  if (files && files.length > 0) {
    const fileNames = files.map(file => file.originalname);
    newProduct.image = fileNames; // Save array of file names
  }

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
  eliminate: (req, res) => {
    const products = data.leerJSON('products');
    const productId = parseInt(req.params.id); // Convierte el id a número

    const productToDelete = products.servicios.find(p => p.id === productId);

    if (!productToDelete) {
        return res.status(404).send('Producto no encontrado');
    }

    const { image } = productToDelete || {};

    if (image) {
        existsSync('./public/images/productos/' + image) && unlinkSync('./public/images/productos/' + image);
    }

    const sinEliminado = products.servicios.filter(p => p.id !== productId);

    const updatedProducts = { ...products, servicios: sinEliminado };
    data.escribirJSON(updatedProducts, 'products');
    
    return res.redirect('/admin');
}


};

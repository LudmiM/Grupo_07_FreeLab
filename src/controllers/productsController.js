// productsController.js
const data = require('../data');
const fs = require('fs');
const { existsSync, unlinkSync, renameSync } = require('fs');
const path = require('path');


const updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, description, skills, portfolio, redes_sociales, category, price, currency } = req.body;
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
      currency,
    };

    if (files && files.length > 0) {
      const fileNames = files.map(file => {
        const fileName = `${Date.now()}_products_${file.originalname}${path.extname(file.originalname)}`;

        // Renombrar el archivo en la carpeta
        const newPath = path.join(__dirname, '../../public/images/productos/', fileName);
        fs.renameSync(file.path, newPath);

        return fileName;
      });

      updatedProduct.image = fileNames; // Guardar array de nombres de archivo modificados
    }

    products.servicios[index] = updatedProduct;
    data.escribirJSON(products, 'products');

    res.redirect('/admin');
  } else {
    res.status(404).send('Producto no encontrado');
  }
};

const addPost = (req, res) => {
  const { name, description, skills, portfolio, redes_sociales, category, price, currency } = req.body;
  const files = req.files;

  const products = data.leerJSON('products');

  // Obtener el último id en la lista actual
  const lastId = products.servicios.length > 0 ? parseInt(products.servicios[products.servicios.length - 1].id) : 0;

  // Crear un nuevo id consecutivo
  const newId = lastId + 1;

  function product(name, description, skills, portfolio, redes_sociales, category, price, currency) {
    this.id = newId; // No convertir a cadena para que sea un número
    this.name = name;
    this.description = description;
    this.skills = skills;
    this.portfolio = portfolio;
    this.redes_sociales = redes_sociales;
    this.category = category;
    this.price = price;
    this.currency = currency;
  }

  const newProduct = new product(name, description, skills, portfolio, redes_sociales, category, price, currency);

  if (files && files.length > 0) {
    const fileNames = files.map(file => file.filename); // Usar file.filename
    newProduct.image = fileNames; // Guardar array de nombres de archivo modificados
  }

  products.servicios.push(newProduct);
  data.escribirJSON(products, 'products');

  res.redirect('/admin');
};


const eliminate = (req, res) => {
  const products = data.leerJSON('products');
  const productId = parseInt(req.params.id); // Convierte el id a número

  const productToDelete = products.servicios.find(p => p.id === productId);

  if (!productToDelete) {
    return res.status(404).send('Producto no encontrado');
  }

  const { image } = productToDelete || {};

  // Eliminar todas las imágenes asociadas al producto
  if (image && image.length > 0) {
    image.forEach(img => {
      const imagePath = path.join(__dirname, '../../public/images/productos/', img);
      existsSync(imagePath) && unlinkSync(imagePath);
    });
  }

  // Resto del código para eliminar el producto
  const sinEliminado = products.servicios.filter(p => p.id !== productId);

  const updatedProducts = { ...products, servicios: sinEliminado };
  data.escribirJSON(updatedProducts, 'products');

  res.redirect('/admin');
};

module.exports = {
  detail: (req, res) => {
    const { id } = req.params;
    const productId = parseInt(id);
    const product = data.leerJSON('products').servicios.find((p) => p.id === productId);
    const usuarios = data.leerJSON('usuarios').freelancers.find((p) => p.id === productId);
    return res.render('products/productDetail', { ...product, ...usuarios });
  },
  detailPost: (req, res) => res.render('products/productDetailPost'),
  formProduct: (req, res) => res.render('products/product-create'),
  edit: (req, res) => {
    const { id } = req.params;
    const productId = parseInt(id); // Convierte el id a número
    const product = data.leerJSON('products').servicios.find((p) => p.id === productId);
    return res.render('products/product-edit', { product });
  },
  addPost,
  updateProduct,
  eliminate,
  listadoProducts: (req,res) => {
    const product = data.leerJSON('products').servicios;
    const categorias = data.leerJSON('category');
    //const usuarios = data.leerJSON('usuarios').freelancers.filter((p) => p.id === productId);
    const { minPrecio , maxPrecio , categoria , puntajeEstrellas } = req.query;
    const filtrados = product.filter(p => {

      const cumplePrecio = (!+minPrecio || p.price >= +minPrecio) && (!+maxPrecio || p.price <= +maxPrecio);
      const cumplecategoria = !categoria || p.category === categoria;
      const cumplePuntajeEstrellas = !puntajeEstrellas || p.cant_stars >= puntajeEstrellas;
      return cumplePrecio && cumplecategoria && cumplePuntajeEstrellas;
    });
    //console.log("Cumplen todo el "+filtrados);
    return res.render('products/listadoProductos', {filtrados,categorias})
  }
};
const express = require('express');
const router = express.Router();
const { leerJSON } = require('../data');
const indexController = require('../controllers/indexController');
const checkRol = require('../middleware/checkRol');
router.get('/', indexController.index);

router.get('/carrito',checkRol.logged, (req, res) => {
  res.render('productCart');
});

router.get('/admin', (req, res) => {
  res.render('dashboard')
});
/*
router.get('/admin',checkRol.admin, (req, res) => {
  //const { updated, added, deleted } = req.query;
  const products = leerJSON('products');
  res.render('dashboard', { products, updated, added, deleted });
});*/

router.get('/resultado', (req, res) => {
  const { key } = req.query; 
  const products = leerJSON('products');
  const filteredProducts = products.servicios.filter(product => product.category.toLowerCase().includes(key.toLowerCase()));
  res.render('resultado', { products: filteredProducts, key });
});

module.exports = router;

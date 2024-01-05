const express = require('express');
const router = express.Router();
const { leerJSON } = require('../data');

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/carrito', (req, res) => {
  res.render('productCart');
});

router.get('/admin', (req, res) => {
  const { updated, added, deleted } = req.query;
  const products = leerJSON('products');
  res.render('dashboard', { products, updated, added, deleted });
});

router.get('/resultado', (req, res) => {
  const { key } = req.query;
  const products = leerJSON('products');
  const filteredProducts = products.servicios.filter(product => product.category.toLowerCase().includes(key.toLowerCase()));
  res.render('resultado', { products: filteredProducts, key });
});

module.exports = router;

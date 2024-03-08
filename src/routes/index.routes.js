const express = require('express');
const router = express.Router();
const { leerJSON } = require('../data');
const indexController = require('../controllers/indexController');
const checkRol = require('./../middleware/checkRol');

router
  .get('/', indexController.index)
  .get('/admin',checkRol.admin, indexController.admin)
  .get('/buscar', indexController.search)
  .get('/listar', indexController.listProjects);

router.get('/listado', (req, res) => {
  const { key } = req.query; 
  const products = leerJSON('products');
  const filteredProducts = products.servicios.filter(product => product.category.toLowerCase().includes(key.toLowerCase()));
  res.render('listado', { products: filteredProducts, key });
});
//router.get('/listado', indexController.listProducts);
router.get('/carrito',checkRol.logged, (req, res) => {
  res.render('productCart');
});
router.post('/newsletter', indexController.newsletter);

module.exports = router;

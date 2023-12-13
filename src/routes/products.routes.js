const express = require('express');
const { detailPost, detail, addPost, edit, formProduct } = require('../controllers/productsController');
const router = express.Router();

/* GET users /productos */
router
  .get('/detallePublicacion',detailPost)
  .get('/formularioProducto',formProduct)
  .post('/agregar',addPost)
  .get('/detalle',detail)
  .get('/editar/:id?', edit);

module.exports = router;

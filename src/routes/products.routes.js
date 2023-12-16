const express = require('express');
const { detailPost, detail, addPost, edit, formProduct, eliminate } = require('../controllers/productsController');
const router = express.Router();

/* GET users /productos */
router
  .get('/detallePublicacion/:id',detailPost)
  .get('/formularioProducto',formProduct)
  .post('/agregar',addPost)
  .get('/detalle/:id',detail)
  .get('/editar/:id?', edit)
  .delete('/delete/:id?', eliminate);

module.exports = router;

const express = require('express');
const { detailPost, detail, addPost, edit, formProduct } = require('../controllers/productsController');
const upload = require('../middleware/upload');
const router = express.Router();

/* GET users /productos */
router
  .get('/detallePublicacion',detailPost)
  .get('/formularioProducto',formProduct)
  .post('/agregar', upload.single('image'), addPost)
  .get('/detalle',detail)
  .get('/editar/:id?', edit);

module.exports = router;

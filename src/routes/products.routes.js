const express = require('express');
const { detailPost, detail, addPost, edit, formProduct, updateProduct, eliminate } = require('../controllers/productsController');
const upload = require('../middleware/upload');
const router = express.Router();

router
  .get('/detallePublicacion', detailPost)
  .get('/formularioProducto', formProduct)
  .post('/agregar', upload.array('image', 5), addPost) // Cambiado a upload.array para permitir varios archivos
  .get('/detalle', detail)
  .delete('/delete/:id', eliminate)
  .get('/editar/:id?', edit)
  .post('/editar/:id?', upload.array('image', 5), updateProduct); // Cambiado a upload.array para permitir varios archivos

module.exports = router;

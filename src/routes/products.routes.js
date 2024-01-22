const express = require('express');
const { detailPost, formProduct, addPost, detail, eliminate, edit, updateProduct, listadoProducts } = require('../controllers/productsController');
const upload = require('../middleware/upload');
const checkRol = require('../middleware/checkRol');
const router = express.Router();

router
  .get('/detallePublicacion',checkRol.logged, detailPost)
  .get('/formularioProducto',checkRol.freelancer, formProduct)
  .post('/agregar', upload.array('image', 5), addPost) // Cambiado a upload.array para permitir varios archivos
  .get('/detalle/:id',checkRol.logged, detail)
  .delete('/delete/:id', eliminate)
  .delete('/eliminar/:id/:imageName?', eliminate)
  .get('/editar/:id?',checkRol.logged, edit)
  .post('/editar/:id?', upload.array('image', 5), updateProduct) // Cambiado a upload.array para permitir varios archivos
  .get('/listado', listadoProducts);
module.exports = router;

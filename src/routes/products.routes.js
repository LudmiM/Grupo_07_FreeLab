const express = require('express');
const { detailPost, formProject, addPost, detail, eliminate, edit, updateProduct, listadoProducts, addProject } = require('../controllers/productsController');
const upload = require('../middleware/upload');
const checkRol = require('../middleware/checkRol');
const router = express.Router();

// /productos

router
  .get('/detallePublicacion',checkRol.logged, detailPost)
  .get('/agregarProyecto',checkRol.logged, formProject)
  .post('/agregarProyecto', addProject)
  .post('/agregar', upload.array('image', 5), addPost) // Cambiado a upload.array para permitir varios archivos
  .get('/detalle/:id',checkRol.logged, detail)
  .delete('/eliminar/:id', eliminate) //ruta que elimina el proyecto creado
  //.delete('/eliminar/:id/:imageName?', eliminate)
  .get('/editar/:id?',checkRol.logged, edit)
  .post('/editar/:id?', upload.array('image', 5), updateProduct) // Cambiado a upload.array para permitir varios archivos
  .get('/listado', listadoProducts);
module.exports = router;

const express = require('express');
const { detailProject, formProject, detailUser, eliminate, edit, updateProduct, listadoProducts, addProject } = require('../controllers/productsController');
const upload = require('../middleware/upload');
const checkRol = require('../middleware/checkRol');
const router = express.Router();

// /productos
//.post('/agregar', upload.array('image', 5), addPost) // Cambiado a upload.array para permitir varios archivos
router
  .get('/detallePublicacion',checkRol.logged, detailProject)
  .get('/agregarProyecto',checkRol.logged, formProject)
  .post('/agregarProyecto', addProject)
  .get('/detalle/:id',checkRol.logged, detailUser)
  .delete('/eliminar/:id', eliminate) //ruta que elimina el proyecto creado
  .get('/editar/:id?',checkRol.logged, edit)
  .post('/editar/:id?', upload.array('image', 5), updateProduct) // Cambiado a upload.array para permitir varios archivos
  .get('/listado', listadoProducts);
module.exports = router;

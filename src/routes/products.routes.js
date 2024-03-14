const express = require('express');
const { detailProject, formProject, detailUser, eliminate, edit, updateProduct, addProject} = require('../controllers/productsController');
const upload = require('../middleware/upload');
const checkRol = require('../middleware/checkRol');
const updateProject = require('../controllers/productsController/updateProject');
const router = express.Router();

// /productos
//.post('/agregar', upload.array('image', 5), addPost) // Cambiado a upload.array para permitir varios archivos
router
  .get('/detalleProyecto/:id', detailProject)
  .get('/agregarProyecto',checkRol.logged, formProject)
  .post('/agregarProyecto', addProject)
  .get('/detalle/:id',detailUser)
  .delete('/eliminar/:id', eliminate) //ruta que elimina el proyecto creado
  .get('/editar/:id',checkRol.logged, edit)
  .put('/actualizar/:id', updateProject)
  .post('/editar/:id?', upload.array('image', 5), updateProduct) // Cambiado a upload.array para permitir varios archivos
module.exports = router;

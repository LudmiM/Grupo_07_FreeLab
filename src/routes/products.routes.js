const express = require('express');
const { detailPost, detail, addPost, edit } = require('../controllers/productsController');
const router = express.Router();

/* GET users /productos */
router
  .get('/detallePublicacion',detailPost)
  .post('/agregar',addPost)
  .get('/detalle',detail)
  .get('/editar/:id?', edit);

module.exports = router;

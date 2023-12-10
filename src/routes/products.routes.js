const express = require('express');
const { detailPost, detail, edit } = require('../controllers/productsController');
const router = express.Router();

/* GET users /productos */
router
  .get('/detallePublicacion', detailPost)
  .get('/detalle', detail)
  /*.get('/editar', edit)*/
  .get('/editar/:id?', edit);

module.exports = router;

// products.routes.js
const express = require('express');
const { detailPost, detail, edit } = require('../controllers/productsController');
const router = express.Router();

router
  .get('/detallePublicacion', detailPost)
  .get('/detalle', detail)
  .get('/editar', edit);

module.exports = router;

const express = require('express');
const { detailPost, detail } = require('../controllers/productsController');
const router = express.Router();

/* GET users /productos */
router/*
  .get('/detallePublicacion:id?',detailPost)
  .get('/detalle:id?',detail)*/
  .get('/detallePublicacion',detailPost)
  .get('/detalle',detail)

module.exports = router;

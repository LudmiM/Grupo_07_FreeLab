const express = require('express');
const router = express.Router();
const {index, card, admin, resultado} = require('../controllers/indexController');

/* Dirige / a la pagina home y carrito*/

router
  .get('/',index)
  .get('/carrito',card)
  .get('/admin',admin)
  .get('/resultado',resultado)

module.exports = router;
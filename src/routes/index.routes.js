const express = require('express');
const router = express.Router();
const {index, card} = require('../controllers/indexController');

/* Dirige a la pagina home y carrito*/

router
  .get('/',index)
  .get('/carrito',card)

module.exports = router;
const express = require('express');
const router = express.Router();
const {index, card, admin} = require('../controllers/indexController');

/* Dirige / a la pagina home y carrito*/

router
  .get('/',index)
  .get('/carrito',card)
  .get('/admin',admin)

module.exports = router;
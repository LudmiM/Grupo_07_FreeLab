const express = require('express');
const router = express.Router();
const {login, register} = require('../controllers/usersController');

/* GET  /usuarios */
router
  .get('/ingreso',login)
  .get('/registro',register)

module.exports = router;
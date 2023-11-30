const express = require('express');
const router = express.Router();
const {login, register} = require('../controllers/usersController');

/* GET users listing. */
router
  .get('/ingreso',login)
  .get('registro',register)

module.exports = router;
const express = require('express');
const { login, register, registration} = require('../controllers/usersController');
const router = express.Router();

/* GET  /usuarios */

router.get('/ingreso',login)
router.post('registrar',register)
router.get('/registro', registration)

module.exports = router;

// routes/users.routes.js


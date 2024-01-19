const express = require('express');
const { login, register, profile } = require('../controllers/usersController');
const router = express.Router();
const checkUserLogin = require('./../middleware/checkUserLogin')

/* GET  /usuarios */

router.get('/ingreso',login)
router.get('/registro',register)
router.get('/perfil/:id',profile)
//router.get('/perfil',checkUserLogin,profile)

module.exports = router;

// routes/users.routes.js


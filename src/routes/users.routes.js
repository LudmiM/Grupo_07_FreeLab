const express = require('express');
const { login, register } = require('../controllers/usersController');
const router = express.Router();

/* GET  /usuarios */

router.get('/ingreso',login)
router.get('/registro',register)

module.exports = router;

// routes/users.routes.js


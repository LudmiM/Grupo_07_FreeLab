const express = require('express');
const { login, register, formRegister, freelancerRegister, empresarRegister} = require('../controllers/usersController');
const router = express.Router();

/* GET  /usuarios */

router.get('/ingreso',login)
router.post('/registrarFreelancer',register,freelancerRegister)
router.post('/registrarEmpresa',empresarRegister)
router.get('/registro', formRegister)

module.exports = router;

// routes/users.routes.js


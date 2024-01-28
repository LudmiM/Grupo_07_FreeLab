const express = require('express');
const { login, register, formRegister, freelancerRegister, empresarRegister , profile, process_login, logout, actualizarLaboral, actualizarPersonal} = require('../controllers/usersController');
const router = express.Router();

const loginValidation = require('./../validations/login-sesionValidation')
const editPersonal = require('./../validations/perfil-edit-personal');
const editLaboral = require('./../validations/perfil-edit-laboral');

const checkUserLogin = require('./../middleware/checkUserLogin')
const uploadAvatar = require('../middleware/uploadAvatar');
const checkRol = require('../middleware/checkRol');

/* GET  /usuarios */

router.get('/ingreso',login)
router.post('/ingreso',loginValidation,process_login)

router.post('/registrarFreelancer', uploadAvatar.single('mainImage'),freelancerRegister)
router.post('/registrarEmpresa',uploadAvatar.single('empresaImage'),empresarRegister)
router.get('/registro', formRegister)

router.get('/perfil',checkUserLogin,profile)
router.put('/edit-laboral',editLaboral, actualizarLaboral)
router.put('/edit-personal',editPersonal, actualizarPersonal)

router.get('/salir',logout)


module.exports = router;

// routes/users.routes.js


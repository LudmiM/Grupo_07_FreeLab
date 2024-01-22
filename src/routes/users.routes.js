const express = require('express');
const { login, register, formRegister, freelancerRegister, empresarRegister , profile, process_login, logout, actualizarLaboral, actualizarPersonal} = require('../controllers/usersController');
const router = express.Router();
const checkUserLogin = require('./../middleware/checkUserLogin')
const loginValidation = require('./../validations/login-sesionValidation')
const uploadAvatar = require('../middleware/uploadAvatar');

/* GET  /usuarios */

router.get('/ingreso',login)
router.post('/ingreso',loginValidation,process_login)

router.post('/registrarFreelancer', uploadAvatar.single('freelancerImage'),freelancerRegister)
router.post('/registrarEmpresa',uploadAvatar.single('empresaImage'),empresarRegister)
router.get('/registro', formRegister)

router.get('/perfil',checkUserLogin,profile)
//router.put('/perfil',checkUserLogin,profile)
router.put('/edit-laboral', actualizarLaboral)
router.put('/edit-laboral', actualizarPersonal)

router.get('/salir',logout)


module.exports = router;

// routes/users.routes.js


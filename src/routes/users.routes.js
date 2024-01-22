const express = require('express');
const { login, register, formRegister, freelancerRegister, empresarRegister , profile, process_login, logout} = require('../controllers/usersController');
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
router.get('/perfil/:id',profile)
//router.get('/perfil',checkUserLogin,profile)

router.get('/salir',logout)


module.exports = router;

// routes/users.routes.js


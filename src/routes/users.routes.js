const express = require('express');
const { login, register, formRegister, freelancerRegister, empresarRegister , profile, process_login} = require('../controllers/usersController');
const router = express.Router();
const uploadAvatar = require('../middleware/uploadAvatar');

/* GET  /usuarios */

router.get('/ingreso',login)
router.post('/ingreso',process_login)

router.post('/registrarFreelancer', uploadAvatar.single('freelancerImage'),freelancerRegister)
router.post('/registrarEmpresa',uploadAvatar.single('empresaImage'),empresarRegister)
router.get('/registro', formRegister)
router.get('/perfil/:id',profile)
//router.get('/perfil',checkUserLogin,profile)


module.exports = router;

// routes/users.routes.js


const express = require('express');
const { login, register, formRegister, freelancerRegister, empresaRegister , profile, process_login, logout, actualizarLaboral, actualizarPersonal} = require('../controllers/usersController');
const router = express.Router();

const loginValidation = require('./../validations/login-sesionValidation')
const editPersonal = require('./../validations/perfil-edit-personal');
const editLaboral = require('./../validations/perfil-edit-laboral');

const checkUserLogin = require('./../middleware/checkUserLogin')
const uploadAvatar = require('../middleware/uploadAvatar');
const checkRol = require('../middleware/checkRol');
const empresaValidationRules = require('../validations/empresaValidation');
const  registerValidationRules = require('../validations/freelancerValidation');

// /usuarios

router.get('/ingreso', login);
router.post('/ingreso', loginValidation, process_login);

router.get('/registro', formRegister);

router.get('/registro/freelancer', (req, res) => {
  return res.render('users/freelancerForm', { errors: [] });
});
router.post('/registro/freelancer', uploadAvatar.single('freelancerImage'),registerValidationRules, freelancerRegister);

router.get('/registro/empresa', (req, res) => {
  return res.render('users/empresaForm');
});
router.post('/registro/empresa', uploadAvatar.single('empresaImage'), empresaValidationRules, empresaRegister);

router.get('/perfil',checkRol.loggedNotAdmin,profile)
router.put('/edit-laboral',editLaboral, actualizarLaboral)
router.put('/edit-personal',editPersonal, actualizarPersonal)

router.get('/salir', logout);

module.exports = router;
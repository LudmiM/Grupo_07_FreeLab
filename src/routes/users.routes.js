const express = require('express');
const { login, register, process_register, freelancerRegister, empresaRegister, profile, process_login, logout, actualizarExtras, actualizarPersonal } = require('../controllers/usersController');
const router = express.Router();

const loginValidation = require('./../validations/loginSesionValidation')
const registerValidation = require('./../validations/registerValidation')
const editPersonal = require('./../validations/perfilEditPersonal');
const editExtras = require('../validations/perfilEditExtras');
const empresaValidationRules = require('../validations/empresaValidation');
const registerValidationRules = require('../validations/freelancerValidation');   
const editLaboralValidation = require('../validations/edit-laboral-validation')


const checkUserLogin = require('./../middleware/checkUserLogin')
const uploadAvatar = require('../middleware/uploadAvatar');
const checkRol = require('../middleware/checkRol');

// /usuarios

router.get('/ingreso', login);
router.post('/ingreso', loginValidation, process_login);

router.get('/registro', register);
router.post('/registro', registerValidation, process_register);

router.get('/registro/freelancer/:email?', (req, res) => {
  return res.render('users/freelancerForm', { errors: [] });
});
router.post('/registro/freelancer', uploadAvatar.single('freelancerImage'), registerValidationRules, freelancerRegister);

router.get('/registro/empresa/:email?', (req, res) => {
  return res.render('users/empresaForm');
});
router.post('/registro/empresa', uploadAvatar.single('empresaImage'), empresaValidationRules, empresaRegister);

router.get('/perfil', checkRol.loggedNotAdmin, profile)
router.put('/edit-laboral', editExtras, actualizarExtras)
//router.put('/edit-laboral', editLaboralValidation, actualizarExtras)
//router.put('/edit-personal-Empresa', empresaValidationRules, actualizarPersonal)

router.put('/edit-personal', editPersonal, actualizarPersonal)

router.get('/salir', logout);

module.exports = router;



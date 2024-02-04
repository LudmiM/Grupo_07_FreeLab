const express = require('express');
const {
  login,
  formRegister,
  freelancerRegister,
  empresaRegister,
  profile,
  process_login,
  logout
} = require('../controllers/usersController');
const router = express.Router();
const checkUserLogin = require('./../middleware/checkUserLogin');
const loginValidation = require('./../validations/login-sesionValidation');
const uploadAvatar = require('../middleware/uploadAvatar');
const checkRol = require('../middleware/checkRol');
const { empresaValidationRules, validate } = require('../validations/empresaValidation');

router.get('/ingreso', login);
router.post('/ingreso', loginValidation, process_login);

router.get('/registro', formRegister);

router.post('/registro', (req, res) => {
  const userType = req.body.userType;

  if (userType === 'freelancer') {
    return res.redirect('/usuarios/registro/freelancer');
  } else if (userType === 'empresa') {
    return res.redirect('/usuarios/registro/empresa');
  } else {
    return res.status(400).send('Bad Request');
  }
});

router.get('/registro/freelancer', (req, res) => {
  return res.render('users/freelancerForm', { errors: [] });
});

router.post('/registro/freelancer', uploadAvatar.single('freelancerImage'), freelancerRegister);

router.get('/registro/empresa', (req, res) => {
  return res.render('users/empresaForm');
});

router.post('/registro/empresa', uploadAvatar.single('empresaImage'), empresaValidationRules(), validate, empresaRegister);

router.get('/perfil', checkUserLogin, profile);

router.get('/salir', logout);

module.exports = router;

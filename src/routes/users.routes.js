// users.routes.js
const express = require('express');
const { login, formRegister, freelancerRegister, empresarRegister, profile, process_login, logout } = require('../controllers/usersController');
const router = express.Router();
const checkUserLogin = require('./../middleware/checkUserLogin');
const loginValidation = require('./../validations/login-sesionValidation');
const uploadAvatar = require('../middleware/uploadAvatar');

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
        // Manejar el caso en que no se especifica userType o es un valor desconocido
        return res.status(400).send('Bad Request');
    }
});

router.get('/registro/freelancer', (req, res) => {
    // Puedes renderizar la vista del formulario de freelancer aquí si es necesario
    return res.render('users/freelancerForm');
});

router.post('/registrarFreelancer', uploadAvatar.single('freelancerImage'), freelancerRegister);

router.get('/registro/empresa', (req, res) => {
    // Puedes renderizar la vista del formulario de empresa aquí si es necesario
    return res.render('users/empresaForm');
});

router.post('/registrarEmpresa', uploadAvatar.single('empresaImage'), empresarRegister);

router.get('/perfil', checkUserLogin, profile);

router.get('/salir', logout);

module.exports = router;

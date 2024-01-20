const { check, body } = require("express-validator");
const {compareSync} = require('bcryptjs');
const {leerJSON} = require('./../data')

module.exports = [
    check("email")
        .notEmpty().withMessage('El email es obligatorio'),
    body("password")
        .notEmpty().withMessage("La contraseña es obligatoria").bail()
        .custom((value, {req}) => {
            const usuarios = leerJSON('usuarios').freelancers;
            //console.log(req.body.email)
            const usuario = usuarios.find(u => u.freelancerEmail.toLowerCase()  === req.body.email.trim().toLowerCase());
            
            if(!usuario || !compareSync(value.trim(), usuario.freelancerPassword)) {
                return false
            }

            return true
        }).withMessage('Datos de acceso incorrectos.')
]
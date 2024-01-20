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
            console.log(req.body.email)
            const user = usuarios.find(user => user.freelancerEmail === req.body.email.trim())

            //if(!user || !compareSync(value.trim(), user.password)) {
            //if(!user || (value.trim(), user.password) ) {
            if(!user || (value.trim() !== user.freelancerPassword)){
                return false
            }

            return true
        }).withMessage('Credenciales inválidas')

]
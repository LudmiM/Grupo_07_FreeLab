const { check, body } = require("express-validator");
const {compareSync} = require('bcryptjs');
const {leerJSON} = require('./../data')

module.exports = [
    check("email")
        .notEmpty().withMessage('El email es obligatorio'),
    body("password")
        .notEmpty().withMessage("La contraseña es obligatoria").bail()
        .custom((value, { req }) => {
            const usuarios = leerJSON('usuarios');
            const userEmail = req.body.email.trim().toLowerCase();
            /*
            console.log('Muestro todos los datos: ')
            console.log(usuarios)
            */
            const freelancer = usuarios.freelancers.find(u => u.userEmail.toLowerCase() === userEmail);
            const empresa = usuarios.empresas.find(e => e.userEmail.toLowerCase() === userEmail);
            
            if (!freelancer && !empresa) {
                return false
            }
        
            const usuario = freelancer || empresa;
        
            if (!compareSync(value.trim(), usuario.userPassword)) {
                return false
            }
        
            return true;
        
        }).withMessage('Datos de acceso incorrectos.')
]
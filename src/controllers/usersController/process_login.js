const { leerJSON } = require('./../../data');
const { validationResult } = require("express-validator");
const datosParaSession = require('./datos-buscando-para-session')

module.exports = (req, res) => {
    const errors = validationResult(req);
    const { email, remember } = req.body;

    if (errors.isEmpty()) { 
        
        const usuarios = leerJSON('usuarios');
        
        req.session.userLogin = datosParaSession(usuarios,email)

        console.log('Muestrameee')
        console.log(req.session.userLogin)
        if (remember) {
            res.cookie('FreeLab_user_Login_01', req.session.userLogin, {
                maxAge: 1000 * 60 * 5 
            });
        }     
        
        return res.redirect('/');
    } else {
        return res.render('users/login', {
            errors: errors.mapped()
        });
    }
};

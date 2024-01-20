const { leerJSON } = require('./../../data');
const { validationResult } = require("express-validator");

module.exports = (req, res) => {
    const errors = validationResult(req);
    const { email, remember } = req.body;

    if (errors.isEmpty()) {
        const freelancersData = leerJSON('usuarios').freelancers;
        const { id, freelancerFirstname, freelancerLastname, } = freelancersData.find(u => u.freelancerEmail.toLowerCase() === email.trim().toLowerCase());
        
        req.session.userLogin = { id,  freelancerFirstname, freelancerLastname, }

        return res.redirect('/');
    } else {
        // Errores de validación
        return res.render('users/login', {
            errors: errors.mapped()
        });
    }
};

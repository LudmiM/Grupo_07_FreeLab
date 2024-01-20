const { leerJSON } = require('./../../data');
const { validationResult } = require("express-validator");

module.exports = (req, res) => {
    const errors = validationResult(req);
    const { email, remember } = req.body;

    if (errors.isEmpty()) {
        const freelancersData = leerJSON('usuarios').freelancers;
        const user = freelancersData.find(user => user.freelancerEmail === email);

        if (user) {
            return res.redirect('/');
        } else {
            // Usuario no encontrado
            return res.render('users/login', {
                errors: { email: { msg: "Usuario no encontrado" } }
            });
        }
    } else {
        // Errores de validación
        return res.render('users/login', {
            errors: errors.mapped()
        });
    }
};

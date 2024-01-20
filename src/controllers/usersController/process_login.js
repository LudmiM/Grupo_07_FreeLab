const { leerJSON } = require('./../../data');
const { validationResult } = require("express-validator");

module.exports = (req, res) => {
    const errors = validationResult(req);
    const { email, remember } = req.body;

    if (errors.isEmpty()) {
        const freelancersData = leerJSON('usuarios').freelancers;
        const user = freelancersData.find(user => user.freelancerEmail === email);

        if (user) {
            /*
            const passwordMatch = await bcrypt.compare(req.body.password, user.password);

            if (passwordMatch) {
                const { id, first_name} = user;

                req.session.userLogin = {
                    id,
                    first_name/
                };
            */
            if (user.freelancerPassword === req.body.password) {
                console.log('Ingrese')
                const { id, freelancerFirstname } = user;

                req.session.userLogin = {
                    id,
                    freelancerFirstname
                };

                

                return res.redirect('/');
            }
        } else {
            // Usuario no encontrado
            console.log('NO Ingrese :(')
            return res.render('users/login', {
                errors: { email: { msg: "Usuario no encontrado" } }
            });
        }
    } else {
        return res.render('users/login', {
            errors: errors.mapped()
        });
    }
};
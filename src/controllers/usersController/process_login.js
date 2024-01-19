const { leerJSON } = require('./../../data');
const { validationResult } = require("express-validator");

module.exports = (req, res) => {
    const errors = validationResult(req);
    const { email, remember } = req.body;

    if (errors.isEmpty()) {
        const freelancersData = leerJSON('usuarios').freelancers;
        const user = freelancersData.find(user => user.email === email);

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
            if (user.password === req.body.password) {
                const { id, first_name } = user;

                req.session.userLogin = {
                    id,
                    first_name
                };

                /*
                remember && res.cookie('kitchening4EV3R_user', req.session.userLogin, {
                    maxAge: 1000 * 60 * 2
                });
                */

                return res.redirect('/');
            }
        } else {
            // Usuario no encontrado
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


/*
const data = require('./../../data');
const {leerJSON} = require('./../../data')
const { validationResult } = require("express-validator");

module.exports = (req, res) => {
    const errors = validationResult(req);
    const { email, remember } = req.body;

    if (errors.isEmpty()) {
        //console.log(leerJSON('usuarios').freelancers)
        console.log(email)
        const { id, first_name/*, /*role*//* } = leerJSON('usuarios').freelancers.find(user => user.email === email)

req.session.userLogin = {
    id,
    first_name/*,
    role*/
/* }
 //console.log(id,first_name,role)
 /*
 remember && res.cookie('kitchening4EV3R_user', req.session.userLogin, {
     maxAge: 1000 * 60 * 2
 })

 return res.redirect('/')*//*Este es el general
return res.redirect('/')

} else {
return res.render('users/login', {
    errors: errors.mapped()
})
}
}
*/
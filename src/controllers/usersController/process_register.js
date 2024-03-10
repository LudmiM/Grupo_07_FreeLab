const { validationResult } = require("express-validator");

module.exports = (req, res) => {
    try{
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.render('users/register', {
                errors: errors.mapped()
            });
        }
        const idRole = +req.body.userType;
        const email = req.body.email;
        if (idRole === 1) {
            
            return res.redirect(`/usuarios/registro/empresa?email=${email}`)
        } else {
            return res.redirect(`/usuarios/registro/freelancer?email=${email}`)
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send('Error interno del servidor');
    }
};
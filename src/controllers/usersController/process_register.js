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
        if (idRole === 1) {
            return res.redirect('/usuarios/registro/empresa')
        } else {
            return res.redirect('/usuarios/registro/freelancer')
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send('Error interno del servidor');
    }
};
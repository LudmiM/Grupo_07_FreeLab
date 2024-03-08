const { validationResult } = require("express-validator");
const db = require('./../../database/models');

module.exports = async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.render('users/register', {
                errors: errors.mapped()
            });
        }

        const email = req.body.email.trim().toLowerCase();
        const existingUser = await db.User.findOne({
            where: {
                email: email
            }
        });

        if (existingUser) {
            // Usuario existente
            console.log("Usuario existente. ID de rol:", existingUser.idRole);

            // redirije segun el usuario, los console es para ver si se rompe algo
            if (existingUser.idRole === 1) {
                console.log("Redirigiendo a formulario de empresa");
                return res.redirect('/usuarios/registro/empresa');
            } else if (existingUser.idRole === 2) {
                console.log("Redirigiendo a formulario de freelancer");
                return res.redirect('/usuarios/registro/freelancer');
            } else {
                console.log("ID de rol desconocido:", existingUser.idRole);
                return res.redirect('/');
            }
        } else {

            const userType = req.body.userType;
            if (userType === '1') {
                console.log("Redirigiendo a formulario de empresa");
                return res.redirect('/usuarios/registro/empresa');
            } else if (userType === '2') {
                console.log("Redirigiendo a formulario de freelancer");
                return res.redirect('/usuarios/registro/freelancer');
            } else {
                console.log("Tipo de usuario desconocido...", userType);
                return res.redirect('/');
            }
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send('Error interno del servidor');
    }
};

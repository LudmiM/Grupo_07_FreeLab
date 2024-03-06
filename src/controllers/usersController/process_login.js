const { validationResult } = require("express-validator");
const db = require('./../../database/models')

module.exports = async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.render('users/login', {
                errors: errors.mapped()
            });
        }
        const emailOfBody = req.body.email.trim().toLowerCase();

        const user = await db.User.findOne({
            where: {
                email: emailOfBody
            }
        });

        const { idRole, id, email } = user.dataValues
        req.session.userLogin = {
            idRole, id, email
        }
        console.log('Muestrameee')
        console.log(req.session.userLogin)

        if (req.body.remember) {
            res.cookie('FreeLab_user_Login_01', req.session.userLogin, {
                maxAge: 1000 * 60 * 5
            });
        }

        return idRole != 3 ? res.redirect('/') : res.redirect('/admin')
    } catch (error) {
        console.error(error);
        return res.status(500).send('Error interno del servidor');
    }
};

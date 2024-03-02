const { validationResult } = require("express-validator");
const db = require('./../../database/models')

module.exports = (req, res) => {
    const errors = validationResult(req);
    const { email, remember } = req.body;

    if (errors.isEmpty()) {
        db.User.findOne({
            where: {
                email:email
            }
        }).then((user) => {
            const {idRole, id, email}=user.dataValues
                req.session.userLogin = {
                    idRole, id, email
                }
                console.log('Muestrameee')
                console.log(req.session.userLogin)

                if (remember) {
                    res.cookie('FreeLab_user_Login_01', req.session.userLogin, {
                        maxAge: 1000 * 60 * 5 
                    });
                }

                return idRole = 3 ? res.redirect('/admin') : res.redirect('/')
        }).catch(error => console.log(error),
        )
    } else {
        return res.render('users/login', {
            errors: errors.mapped()
        });
    }
};

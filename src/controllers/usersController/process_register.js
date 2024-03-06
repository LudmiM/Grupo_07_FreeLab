const { validationResult } = require("express-validator");
const db = require('./../../database/models')

module.exports = (req, res) => {
    try{
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.render('users/register', {
                errors: errors.mapped()
            });
        }
        const email = req.body.email.trim().toLowerCase();
        const user = db.User.findOne({
            where : {
                email : email
            }
        })
        if (user.idRole === 1) {
            //Escribir la url del formulario company
            return res.redirect('/')
            return res.render('/')
        } else {
            //Escribir la url del formulario freelancer
            return res.redirect('/')
            return res.render('/')
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send('Error interno del servidor');
    }
};
const { check, body } = require("express-validator");
const bcrypt = require('bcryptjs');
const db = require('../database/models');

module.exports = [
    check("email")
        .notEmpty().withMessage('El email es obligatorio')
        .isEmail().withMessage('Debe ser un email válido')
        .custom(async (value) => {
            const user = await db.User.findOne({ where: { email: value } });
            if (!user) {
                return Promise.reject('El email no está registrado');
            }
        }),
    body("password")
        .notEmpty().withMessage("La contraseña es obligatoria")
        .custom(async (value, { req }) => {
            const user = await db.User.findOne({ where: { email: req.body.email } });
            if (!user) {
                return Promise.reject('Datos de acceso incorrectos');
            }
            const passwordMatch = await bcrypt.compare(value, user.password);
            if (!passwordMatch) {
                return Promise.reject('Contraseña incorrecta');
            }
        })
];

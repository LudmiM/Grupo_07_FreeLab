const { body } = require('express-validator');

module.exports = [
    body('firstName').notEmpty().withMessage('El nombre es obligatorio').matches(/[A-Za-zÁ-ÿ\s']{1,}/).withMessage('Ingrese un nombre válido'),
    body('lastName').notEmpty().withMessage('El apellido es obligatorio').matches(/[A-Za-zÁ-ÿ\s']{1,}/).withMessage('Ingrese un apellido válido'),
    body('country').notEmpty().withMessage('El país es obligatorio').matches(/[A-Za-zÁ-ÿ\s']{1,}/).withMessage('Ingrese un país válido'),
    body('phoneCode').notEmpty().withMessage('El código de país es obligatorio').matches(/^[0-9+]+$/).withMessage('Ingrese un código de país válido'),
    body('phone').notEmpty().withMessage('El número de teléfono es obligatorio').matches(/[0-9]+/).withMessage('Ingrese un número de teléfono válido'),
    body('hourValue').notEmpty().withMessage('El valor por hora es obligatorio').isNumeric().withMessage('El valor por hora debe ser un número'),
    // Agrega más reglas según sea necesario
];

// validations/registerValidation.js:

const { body } = require('express-validator');

module.exports = [
    body('firstName').notEmpty().withMessage('El nombre es obligatorio'),
    body('lastName').notEmpty().withMessage('El apellido es obligatorio'),
    body('email').isEmail().withMessage('Ingrese un correo electrónico válido'),
    body('password').notEmpty().withMessage('La contraseña es obligatoria'),
    body('freelancerConfirmPassword')
      .notEmpty().withMessage('La confirmación de la contraseña es obligatoria')
      .custom((value, { req }) => {
        if (value != req.body.password) {
          throw new Error('Las contraseñas no coinciden');
        }
        return true;
      }),
    body('freelancerPhone').notEmpty().withMessage('El número de teléfono es obligatorio').isAlphanumeric().withMessage('Ingrese un número válido'), // Permitir letras y números
    // Agrega más reglas según sea necesario
];
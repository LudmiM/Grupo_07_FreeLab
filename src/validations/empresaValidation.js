const { body } = require('express-validator');

module.exports = [
    body('companyName').notEmpty().withMessage('El nombre de la empresa es obligatorio'),
    body('userEmail').isEmail().withMessage('Ingrese un correo electrónico válido'),
    body('userPassword').notEmpty().withMessage('La contraseña es obligatoria'),
    body('confirmPassword')
      .notEmpty().withMessage('La confirmación de la contraseña es obligatoria')
      .custom((value, { req }) => {
        if (value !== req.body.userPassword) {
          throw new Error('Las contraseñas no coinciden');
        }
        return true;
      }),
    body('employerPhone').notEmpty().withMessage('El número de teléfono es obligatorio').isNumeric().withMessage('Ingrese un número válido'), // Corregido a isNumeric()
    // Agrega más reglas según sea necesario
];

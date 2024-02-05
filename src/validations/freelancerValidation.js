// validations/registerValidation.js

const { body } = require('express-validator');

module.exports = [
    body('freelancerFirstname').notEmpty().withMessage('El nombre es obligatorio'),
    body('freelancerLastname').notEmpty().withMessage('El apellido es obligatorio'),
    body('userEmail').isEmail().withMessage('Ingrese un correo electrónico válido'),
    body('userPassword').notEmpty().withMessage('La contraseña es obligatoria'),
    body('freelancerConfirmPassword')
      .notEmpty().withMessage('La confirmación de la contraseña es obligatoria')
      .custom((value, { req }) => {
        if (value != req.body.userPassword) {
          return withMessage('Las contraseñas no coinciden');
        }
        return true;
      }),
    body('freelancerPhone').notEmpty().withMessage('El número de teléfono es obligatorio').isNumeric().withMessage('Ingrese un número válido'),
    // Agrega más reglas según sea necesario
];
/*
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = errors.array().map(err => ({ [err.param]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });
};*/
/*
module.exports = {
  registerValidationRules,
};*/

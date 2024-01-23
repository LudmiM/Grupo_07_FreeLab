const { body, validationResult } = require('express-validator');

const empresaValidationRules = () => {
  return [
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
    body('employerPhone').notEmpty().withMessage('El número de teléfono es obligatorio').isNumeric().withMessage('Ingrese un número válido'),
    // Agrega más reglas según sea necesario
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = errors.array().map(err => ({ [err.param]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });
};

module.exports = {
  empresaValidationRules,
  validate,
};

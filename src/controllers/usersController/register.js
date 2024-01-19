// controllers/users/register.js

const { registerValidationRules, validate } = require('../../validations/registerValidation');
const { validationResult } = require('express-validator');

  module.exports = [
  registerValidationRules(),
  validate,
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Si hay errores de validación, renderiza la vista del formulario de registro con los errores
      return res.render('users/register', { errors: errors.array() });
    }

    // Procesar la solicitud de registro si la validación es exitosa
    // Aquí puedes agregar el código actual de manejo del registro
    next();
  
  },
];

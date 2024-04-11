const {body} = require('express-validator');

module.exports = [
    
       body('name')
              .notEmpty().withMessage('El nombre es obligatorio'),
       body('description')
              .notEmpty().withMessage('La descripción es obligatoria'),
       body('startYear')
              .notEmpty().withMessage('Ingrese el año de inicio'),
       body('endYear')
              .notEmpty().withMessage('Ingrese el año de finalización')
];
// nombre, descripcion año de inicio y año de finalizacion
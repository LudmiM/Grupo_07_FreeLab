const { body } = require('express-validator');

module.exports = [
    body('companyName').notEmpty().withMessage('El nombre de la empresa es obligatorio'),
    body('description').notEmpty().withMessage('La descripción de la empresa es obligatoria'),
    body('location').notEmpty().withMessage('La ubicación de la empresa es obligatoria'),
    
    body('website').notEmpty().withMessage('El sitio web de la empresa es obligatorio'),
];

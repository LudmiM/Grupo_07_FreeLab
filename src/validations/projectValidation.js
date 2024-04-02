const { body } = require("express-validator");

module.exports = [
    body('title')
        .notEmpty().withMessage('El titulo del proyecto no puede estar vacio'),
    body('description')
        .notEmpty().withMessage('El debe agregar una descripcion'),
    body('skilles')
        .notEmpty().withMessage('Debe seleccionar al menos 1 skill')
];

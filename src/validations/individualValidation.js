const { body } = require("express-validator");

module.exports = [
    body('specialty')
        .notEmpty().withMessage('Debe completar la especialidad'),
    body('about')
        .notEmpty().withMessage('Debe agregar una descripcion'),
    body('price')
        .notEmpty().withMessage('Debe agregar el precio'),
    body('idCategory')
        .notEmpty().withMessage('Debe seleccionar la categoria'),
    body('skillesInd')
        .notEmpty().withMessage('Debe seleccionar al menos 1 skill')
];
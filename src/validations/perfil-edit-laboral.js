const { check } = require("express-validator");

const laboralValidator = [
    check('name')
        .notEmpty().withMessage('El puesto es obligatorio'),
    check('description')
        .notEmpty().withMessage('La descripción es obligatoria'),
    check('skills')
        .notEmpty().withMessage('Las habilidades son obligatorias'),
        /*
    check('portfolio')
        .notEmpty().withMessage('El portafolio es obligatorio'),
    check('redes_sociales')
        .notEmpty().withMessage('Las redes sociales son obligatorias'), */
    check('category')
        .notEmpty().withMessage('La categoría es obligatoria'),
    check('price')
        .notEmpty().withMessage('El precio es obligatorio'),
    check('currency')
        .notEmpty().withMessage('La moneda es obligatoria')
    /*
    check('image')
        .notEmpty().withMessage('La URL de la imagen es obligatoria')
        .isURL().withMessage('Debe ser una URL válida para la imagen')*/
];

module.exports = laboralValidator;


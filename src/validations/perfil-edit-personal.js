const { check } = require("express-validator");

const editPersonalValidator = [
    check('freelancerFirstname')
        .notEmpty().withMessage('El nombre no debe estar vacio')/*,
    check('freelancerLastname')
        .notEmpty().withMessage('El apellido no debe estar vacio'),
    check('freelancerPhoneCode')
        .notEmpty().withMessage('El código de país es obligatorio'),
    check('freelancerPhone')
        .notEmpty().withMessage('El número de teléfono es obligatorio')/*,
    check('mainImage')
        .notEmpty().withMessage('La imagen es obligatoria')*/
];

module.exports = editPersonalValidator;

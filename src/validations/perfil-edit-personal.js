const { body } = require("express-validator");

module.exports = [
    body('freelancerFirstname')
        .notEmpty().withMessage('El nombre no debe estar vacio'),
    body('freelancerLastname')
        .notEmpty().withMessage('El apellido no debe estar vacio'),
    body('freelancerPhoneCode')
        .notEmpty().withMessage('El código de país es obligatorio'),
    body('freelancerPhone')
        .notEmpty().withMessage('El número de teléfono es obligatorio')/*,
    body('mainImage')
        .notEmpty().withMessage('La imagen es obligatoria')*/
];

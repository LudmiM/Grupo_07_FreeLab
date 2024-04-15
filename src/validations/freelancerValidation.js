const { body } = require('express-validator');

module.exports = [
    body('firstName')
        .notEmpty().withMessage('El nombre es obligatorio')
        .isLength({ min: 2 }).withMessage('El nombre debe tener al menos 2 caracteres'),

    body('lastName')
        .notEmpty().withMessage('El apellido es obligatorio')
        .isLength({ min: 2 }).withMessage('El apellido debe tener al menos 2 caracteres'),

    body('country')
        .notEmpty().withMessage('El país es obligatorio')
        .matches(/[A-Za-zÁ-ÿ\s']{1,}/).withMessage('Ingrese un país válido'),

    body('phoneCode')
        .notEmpty().withMessage('El código de país es obligatorio')
        .matches(/^[0-9+]+$/).withMessage('Ingrese un código de país válido'),

    body('phone')
        .notEmpty().withMessage('El número de teléfono es obligatorio')
        .matches(/[0-9]+/).withMessage('Ingrese un número de teléfono válido'),

    body('hourValue')
        .notEmpty().withMessage('El valor por hora es obligatorio')
        .isNumeric().withMessage('El valor por hora debe ser un número'),

    body('mainImage')
        .custom((value, { req }) => {
            if (!req.file) {
                throw new Error('La imagen es obligatoria');
            }
            const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
            const extension = allowedExtensions.exec(value.originalname);
            if (!extension) {
                throw new Error('Formato de archivo no válido. Debe ser JPG, JPEG, PNG o GIF');
            }
            return true;
        }),
];

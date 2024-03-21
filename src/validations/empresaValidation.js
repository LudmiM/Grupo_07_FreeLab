// EmpresaValidation.js
const { body } = require('express-validator');

module.exports = [
    body('companyName')
        .notEmpty().withMessage('El nombre de la empresa es obligatorio')
        .isLength({ min: 2 }).withMessage('El nombre de la empresa debe tener al menos 2 caracteres'),

    body('companyDescription').notEmpty().withMessage('La descripción de la empresa es obligatoria'),

    body('location').notEmpty().withMessage('La ubicación de la empresa es obligatoria'),

    body('website')
        .notEmpty().withMessage('El sitio web de la empresa es obligatorio')
        .isURL().withMessage('El formato del sitio web no es válido'),

    body('empresaImage').custom((value, { req }) => {
        if (!req.file) {
            throw new Error('La imagen de perfil de la empresa es obligatoria');
        }
        const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
        const extension = req.file.originalname.split('.').pop().toLowerCase();
        if (!allowedExtensions.includes(extension)) {
            throw new Error('Formato de archivo no válido. Debe ser JPG, JPEG, PNG o GIF.');
        }
        return true;
    })
];

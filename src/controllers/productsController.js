// productsController.js
const productsData = require('../data/index');

module.exports = {
    detailPost: (req, res) => {
        // Implementa la lógica para /detallePublicacion (si es necesario)
        res.render('products/productDetailPost');
    },
    detail: (req, res) => {
        // Implementa la lógica para /detalle (si es necesario)
        res.render('products/productDetail');
    },
    edit: (req, res) => {
        // Obtén el ID del producto desde los parámetros de la solicitud
        const productId = req.query.id;

        // Si se proporciona productId, obtén los detalles del producto; de lo contrario, crea un nuevo objeto de producto
        const product = productId ? productsData.servicios.find(p => p.id == productId) : {
            id: '',
            name: '',
            description: '',
            skills: '',
            portfolio: '',
            redes_sociales: '',
            images: [],
            category: '',
            price: ''
        };

        res.render('products/product-edit', { product });
    }
};

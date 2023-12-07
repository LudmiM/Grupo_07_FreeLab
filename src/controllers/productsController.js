// productsController.js
const data = require('../data');

module.exports = {
    detail: (req, res) => res.render('products/productDetail'),
    detailPost: (req, res) => res.render('products/productDetailPost'),
    edit: (req, res) => {
        const { id } = req.params;
        const product = data.leerJSON('products').servicios.find((p) => p.id == id);
        res.render('products/product-edit', { product });
    }
};

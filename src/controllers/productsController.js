// productsController.js
const data = require('../data');
const crypto = require('crypto');

module.exports = {
    detail: (req, res) => res.render('products/productDetail'),
    detailPost: (req, res) => res.render('products/productDetailPost'),
    formProduct:(req,res) => res.render('products/product-create'),
    edit: (req, res) => {
        const { id } = req.params;
        const product = data.leerJSON('products').servicios.find((p) => p.id == id); 
        return res.render('products/product-edit', { product });
    },
    addPost: (req,res) => {
        const {name, description, skills, image, portfolio, redes_sociales, category, price} = req.body;
        const file = req.file;
        function product(name, description, skills, image, portfolio, redes_sociales, category, price){
            this.id = crypto.randomUUID();
            this.name = name;
            this.description = description;
            this.skills = skills;
            this.image = file.filename;
            this.portfolio = portfolio;
            this.redes_sociales = redes_sociales;
            this.category = category;
            this.price = price;
        };

        const newProduct = new product(name, description, skills, file.originalname, portfolio, redes_sociales, category, price);
        const products = data.leerJSON('products');
        
        products.servicios.push(newProduct);
        data.escribirJSON(products,'products');
        
        return res.redirect('/admin');
    }
};

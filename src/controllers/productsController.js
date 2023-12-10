const data = require('../data')
const crypto = require('crypto')

module.exports = {
    detail: (req,res) => {
        res.render('products/productDetail');
    },
    detailPost: (req,res) => { 
        return res.render('products/productDetailPost');
    },
    addPost: (req,res) => {
        const {name, description, skills, portfolio, redes_sociales, category, price} = req.body;
        
        function presentacion(name, description, skills, portfolio, redes_sociales, category, price){
            this.id = crypto.randomUUID();
            this.name = name;
            this.description = description;
            this.skills = skills;
            this.portfolio = portfolio;
            this.redes_sociales = redes_sociales;
            this.category = category;
            this.price = price;
        };

        const nuevaPresentacion = new presentacion(name, description, skills, portfolio, redes_sociales, category, price);
        const presentaciones = data.leerJSON('presentaciones');
        
        presentaciones.push(nuevaPresentacion);
        data.escribirJSON(presentaciones,'presentaciones');
        
        return res.redirect('/');
    }
}       
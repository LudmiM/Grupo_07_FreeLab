const data = require('./../../data');
const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {

    const { name, description, skills, portfolio, redes_sociales, category, price, currency } = req.body;

    let productsData = data.leerJSON('products');

    const lab = data.leerJSON('products').servicios.map((p) => {
        if (p.id === req.session.userLogin.id) {
            p.id = p.id;
            p.name = name ? name.trim() : p.name;
            p.description = description ? description.trim() : p.description;
            p.skills = skills ? skills.trim() : p.skills;
            p.portfolio = portfolio ? portfolio.trim() : p.portfolio;
            p.redes_sociales = redes_sociales ? redes_sociales.trim() : p.redes_sociales;
            p.category = category ? category.trim() : p.category;
            p.price = price ? price.trim() : p.price;
            p.currency = currency ? currency.trim() : p.currency;

        }
        return p;
    });

    productsData.servicios = lab;

    // Utilizar la función escribirJSON con el objeto completo
    data.escribirJSON(productsData, 'products');

    return res.redirect('/usuarios/perfil')

}

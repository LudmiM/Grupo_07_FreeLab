const { leerJSON, escribirJSON } = require('./../../data');

module.exports = (req, res) => {
    console.log('Yo soy 1 :', req.session.userLogin);

    const { name, description, skills, portfolio, redes_sociales, category, price, currency } = req.body;
    console.log('Yo soy 2 :', req.session.userLogin);
    const data = leerJSON('products');

    const editados = (p) => {
        if (p.id === req.session.userLogin.id) {
            //p.id = p.id;
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
    };
    data.servicios = data.servicios.map(editados)
    console.log('Yo soy 3 :', req.session.userLogin);

    escribirJSON(data, 'products');
    console.log('Yo soy 4 :', req.session.userLogin);
    return res.redirect('/usuarios/perfil')

}

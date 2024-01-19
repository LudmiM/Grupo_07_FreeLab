const { leerJSON } = require("../../data");

module.exports = (req, res) => {
    // Renderizar la vista de login
    return res.render('users/login');
};

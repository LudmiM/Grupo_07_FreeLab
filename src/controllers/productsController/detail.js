const data = require('./../../data');

module.exports = (req,res) => {
    const { id } = req.params;
    const productId = parseInt(id);
    const product = data.leerJSON('products').servicios.find((p) => p.id === productId);
    const usuarios = data.leerJSON('usuarios').freelancers.find((p) => p.id === productId);
    return res.render('products/productDetail', { ...product, ...usuarios });
  }
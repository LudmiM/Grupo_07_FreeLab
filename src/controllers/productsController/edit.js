const data = require('./../../data');

module.exports = (req, res) => {
    const { id } = req.params;
    const productId = parseInt(id); // Convierte el id a número
    const product = data.leerJSON('products').servicios.find((p) => p.id === productId);
    return res.render('products/product-edit', { product });
  }
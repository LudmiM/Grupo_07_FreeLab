const data = require('./../../data');

module.exports = (req,res) => {
    const product = data.leerJSON('products').servicios;
    const categorias = data.leerJSON('category');
    //const usuarios = data.leerJSON('usuarios').freelancers.filter((p) => p.id === productId);
    const { minPrecio , maxPrecio , categoria , puntajeEstrellas } = req.query;
    const filtrados = product.filter(p => {

      const cumplePrecio = (!+minPrecio || p.price >= +minPrecio) && (!+maxPrecio || p.price <= +maxPrecio);
      const cumplecategoria = !categoria || p.category === categoria;
      const cumplePuntajeEstrellas = !puntajeEstrellas || p.cant_stars >= puntajeEstrellas;
      return cumplePrecio && cumplecategoria && cumplePuntajeEstrellas;
    });
    //console.log("Cumplen todo el "+filtrados);
    return res.render('products/listadoProductos', {filtrados,categorias})
  }
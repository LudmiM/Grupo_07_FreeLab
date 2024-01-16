const data = require('./../../data');

module.exports = (req, res) => {
    const { name, description, skills, portfolio, redes_sociales, category, price, currency } = req.body;
    const files = req.files;
  
    const products = data.leerJSON('products');
  
    // Obtener el último id en la lista actual
    const lastId = products.servicios.length > 0 ? parseInt(products.servicios[products.servicios.length - 1].id) : 0;
  
    // Crear un nuevo id consecutivo
    const newId = lastId + 1;
  
    function product(name, description, skills, portfolio, redes_sociales, category, price, currency) {
      this.id = newId; // No convertir a cadena para que sea un número
      this.name = name;
      this.description = description;
      this.skills = skills;
      this.portfolio = portfolio;
      this.redes_sociales = redes_sociales;
      this.category = category;
      this.price = price;
      this.currency = currency;
    }
  
    const newProduct = new product(name, description, skills, portfolio, redes_sociales, category, price, currency);
  
    if (files && files.length > 0) {
      const fileNames = files.map(file => file.filename); // Usar file.filename
      newProduct.image = fileNames; // Guardar array de nombres de archivo modificados
    }
  
    products.servicios.push(newProduct);
    data.escribirJSON(products, 'products');
  
    res.redirect('/admin');
  }
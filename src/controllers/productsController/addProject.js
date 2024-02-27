const data = require('../../data');

module.exports = (req, res) => {
    const { title, description} = req.body;
  
    const publications = data.leerJSON('publications');
   
    // Obtener el último id en la lista actual
    const lastId = publications.servicios.length > 0 ? parseInt(publications.servicios[publications.servicios.length - 1].id) : 0;
  
    // Crear un nuevo id consecutivo
    const newId = lastId + 1;
  
    function projects(name, description, skills, portfolio, redes_sociales, category, price, currency) {
      this.id = newId; // No convertir a cadena para que sea un número
      this.name = name;
      this.description = description;
      this.skills = skills;
      this.portfolio = portfolio;
      this.redes_sociales = redes_sociales;
      this.category = category;
      this.price = price;
    }
  
    const newProject = new product(name, description, skills, portfolio, redes_sociales, category, price, currency);
  
    if (files && files.length > 0) {
      const fileNames = files.map(file => file.filename); // Usar file.filename
      newProduct.image = fileNames; // Guardar array de nombres de archivo modificados
    }
  
    publications.servicios.push(newProduct);
    data.escribirJSON(publications, 'publications');
  
    res.redirect('/admin');
  }
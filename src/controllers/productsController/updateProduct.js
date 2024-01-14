const data = require('../data');
const fs = require('fs');
const path = require('path');

module.exports = (req,res) => {
    const { id } = req.params;
    const { name, description, skills, portfolio, redes_sociales, category, price, currency } = req.body;
    const files = req.files;
  
    const products = data.leerJSON('products');
    const index = products.servicios.findIndex((p) => p.id == id);
  
    if (index !== -1) {
      const updatedProduct = {
        id: parseInt(id), // Convertir el id a número
        name,
        description,
        skills,
        portfolio,
        redes_sociales,
        category,
        price,
        currency,
      };
  
      if (files && files.length > 0) {
        const fileNames = files.map(file => {
          const fileName = `${Date.now()}_products_${file.originalname}${path.extname(file.originalname)}`;
  
          // Renombrar el archivo en la carpeta
          const newPath = path.join(__dirname, '../../public/images/productos/', fileName);
          fs.renameSync(file.path, newPath);
  
          return fileName;
        });
  
        updatedProduct.image = fileNames; // Guardar array de nombres de archivo modificados
      }
  
      products.servicios[index] = updatedProduct;
      data.escribirJSON(products, 'products');
  
      res.redirect('/admin');
    } else {
      res.status(404).send('Producto no encontrado');
    }
  }
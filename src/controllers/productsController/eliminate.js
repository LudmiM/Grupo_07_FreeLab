const data = require('./../../data');
const fs = require('fs');
const { existsSync, unlinkSync, renameSync } = require('fs');
const path = require('path');


module.exports = (req,res) => {
    const products = data.leerJSON('products');
    const productId = parseInt(req.params.id); // Convierte el id a número
  
    const productToDelete = products.servicios.find(p => p.id === productId);
  
    if (!productToDelete) {
      return res.status(404).send('Producto no encontrado');
    }
  
    const { image } = productToDelete || {};
  
    // Eliminar todas las imágenes asociadas al producto
    if (image && image.length > 0) {
      image.forEach(img => {
        const imagePath = path.join(__dirname, '../../../public/images/productos/', img);
        existsSync(imagePath) && unlinkSync(imagePath);
      });
    }
  
    // Resto del código para eliminar el producto
    const sinEliminado = products.servicios.filter(p => p.id !== productId);
  
    const updatedProducts = { ...products, servicios: sinEliminado };
    data.escribirJSON(updatedProducts, 'products');
  
    res.redirect('/admin');
  }
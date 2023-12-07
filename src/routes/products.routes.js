// products.routes.js
const express = require('express');
const { detailPost, detail, edit } = require('../controllers/productsController');
const router = express.Router();

// Ruta para detallePublicacion (GET)
router.get('/detallePublicacion', (req, res) => {
  detailPost(req, res);
});

// Ruta para detalle (GET)
router.get('/detalle', (req, res) => {
  detail(req, res);
});

// Ruta para editar (GET)
router.get('/editar', (req, res) => {
  edit(req, res);
});

// Ruta para procesar el formulario de edición (POST)
router.post('/editar', (req, res) => {
  // Manejar la presentación del formulario aquí (actualizar el producto o agregar uno nuevo)
  // Puedes acceder a los datos del formulario usando req.body
  // Ejemplo: const nombreProducto = req.body.nombre;

  // Después de manejar la presentación del formulario, puedes redirigir al usuario a la página de detalles del producto u otra página apropiada
  res.redirect('/productos/detalle');
});

module.exports = router;


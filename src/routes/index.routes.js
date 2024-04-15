const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');
const checkRol = require('./../middleware/checkRol');

router
  .get('/', indexController.index)
  .get('/admin',checkRol.admin, indexController.admin)
  .get('/buscar', indexController.search)
  .post('/newsletter', indexController.newsletter)
  .post('/guardar/:id')
  .delete('/guardar/:id')
  //Los freelancers pueden guardarproyectos, recibo el id del proyecto, pensar bien donde van en PRYECTRO o index router
  .get('/listar/:cat', indexController.listProjects);

//router.get('/listado', indexController.listProducts);
router.get('/carrito',checkRol.logged, (req, res) => {
  res.render('productCart');
});

module.exports = router;
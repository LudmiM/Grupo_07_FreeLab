const express = require('express');
const { detailPost, detail } = require('../controllers/productsController');
const router = express.Router();
//const {index} = require('../controllers/indexController');

/* GET users listing. */
router
  .get('/detallePublicacion:id?',detailPost)
  .get('/detalle:id?',detail)

module.exports = router;

/*
app.get('/productDetail', (req,res) => res.sendFile(path.join(__dirname, 'views','productDetail.html')));
app.get('/productDetailPost', (req,res) => res.sendFile(path.join(__dirname, 'views','productDetailPost.html')));
*/
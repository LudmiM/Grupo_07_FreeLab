const express = require('express');
const { getAllProducts, getOneProduct } = require('../controllers/apis/productsApiController');
const router = express.Router();

/* /apis */
router
  .get('/products', getAllProducts)
  .get('/products/:id', getOneProduct)


module.exports = router;
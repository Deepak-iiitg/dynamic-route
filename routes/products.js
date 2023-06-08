const express = require('express');
const router = express.Router();
const products = require('../controllers/product');

router.get('/',products.getProduct);
router.get('/:productId',products.getProduct);
router.get(products.productNotFound);

module.exports = {router};
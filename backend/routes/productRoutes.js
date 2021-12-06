const express = require('express');
const router = express.Router();

const { 
    getAllProducts,
     getProductById, 
    } = require('../controller/productControllers')

//Description GET ALL PRODUCTS
//ROUTE GET api/products
router.get('/', getAllProducts);

//Description GET PRODUCT BY ID
//ROUTE GET api/products/:id
router.get('/:id', getProductById);

module.exports = router;
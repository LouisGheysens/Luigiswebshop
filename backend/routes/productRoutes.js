const express = require('express');
const router = express.Router();
const Order = require('../models/order');

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

//POST method
router.post('/api/orders', (req, res, next) =>{
    let data = new Order(req.body);
    order.save().exec().then(result => {
    console.log(result);
    res.status(201).json(result)
  }).catch(err =>{
    console.log(err);
    res.status(500).json({
      err: err
    });
  });
})


module.exports = router;
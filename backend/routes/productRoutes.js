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

router.post("/", (req, res) => {
    let myData = new Order(req.body);
    myData.save()
      .then(item => {
        res.send("item saved to database");
        res.redirect('/');
      })
      .catch(err => {
        res.status(400).send("unable to save to database");
      });
  });


module.exports = router;
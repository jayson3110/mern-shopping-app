const express = require('express');
const router = express.Router();

const {getAllProducts, getAllProductById} = require('../controller/productController');


//@desc Get all product  from db
//@route Get /api/products
// @access Public


router.get('/', getAllProducts)



//@desc Get all product by id from db
//@route Get /api/products/:id
// @access Public


router.get('/:id',getAllProductById); 


module.exports = router;
var express = require('express')
var router = express.Router()
var ProductController = require('../controllers/products.controller');
var UserController = require('../controllers/users.controller');


// any user
router.get('/products/', ProductController.listProducts)  // list all products
router.get('/products/:id', ProductController.detailProduct)  // detail a product

// only staff users
router.post('/products/', ProductController.createProduct) // creates a product
router.put('/products/:id',
    UserController.ensureIsStaff, 
    ProductController.updateProduct)  // updates a product
router.delete('/products/:id', ProductController.deleteProduct)  // deletes a product

// Export the Router
module.exports = router;
var express = require('express')
var router = express.Router()
var ProductController = require('../controllers/products.controller');
var UserController = require('../controllers/users.controller');
var UploadController = require('../controllers/uploadimage.controller');
var Authorization = require('../auth/authorization');

// any user
router.get('/products/', ProductController.listProducts)  // list all products
router.get('/products/:id', ProductController.detailProduct)  // detail a product

// only staff users
router.post('/products/', UserController.ensureIsStaff, ProductController.createProduct) // creates a product
router.put('/products/:id',
    UserController.ensureIsStaff, 
    ProductController.updateProduct)  // updates a product
router.delete('/products/:id', UserController.ensureIsStaff,  ProductController.deleteProduct)  // deletes a product

router.post('/products/guardarImageProduct ',ProductController.guardarImagenProduct)
router.post('/products/uploadImage',UploadController.uploadFilesImageProduct)
router.post('/products/imageProductByProduct',Authorization,ProductController.getImagenProductByProduct)

// Export the Router
module.exports = router;
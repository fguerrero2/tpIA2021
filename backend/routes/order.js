var express = require('express')
var router = express.Router()
var OrderController = require('../controllers/orders.controller');
var UserController = require('../controllers/users.controller');



router.get('/orders/',
  UserController.ensureIsStaff,
  OrderController.getOrders) // list

router.get('/orders/cart/',
  UserController.ensureAuthenticated, 
  OrderController.getOrderCart) // detail

router.post('/orders/cart/',
  UserController.ensureAuthenticated, 
  OrderController.postOrderCart) // create / update

router.post('/orders/cart/add',
  UserController.ensureAuthenticated, 
  OrderController.postOrderCartAdd) // add item to cart

router.delete('/orders/cart/:id',
  UserController.ensureAuthenticated, 
  OrderController.deleteOrderCartItem) // delete item to cart

  // Export the Router
module.exports = router;

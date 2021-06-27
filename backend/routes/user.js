var express = require('express')
var router = express.Router()
var UserController = require('../controllers/users.controller');

router.post('/users/login/', UserController.loginUser)
router.get('/users/logout/', UserController.ensureAuthenticated, UserController.logoutUser)
router.post('/users/registration/', UserController.createUser)

module.exports = router;
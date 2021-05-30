var express = require('express')
var router = express.Router()
var UserController = require('../controllers/users.controller');


// Authorize each API with middleware and map to the Controller Functions
/* GET users listing. */
router.get('/users/test', function(req, res, next) {
    res.send('Llegaste a la ruta de  api/users/user');
  });
router.post('/users/registration', UserController.createUser)
router.post('/users/login/', UserController.loginUser)
router.get('/users', UserController.getUsers)



// Export the Router
module.exports = router;



//api/users
//api/users/registration
//api/users/login
var express = require('express')
var router = express.Router()
var EntregamodoController = require('../controllers/entregamodos.controller');


// Authorize each API with middleware and map to the Controller Functions
/* GET entregamodos listing. */
router.get('/entregamodos/test', function(req, res, next) {
    res.send('Llegaste a la ruta de  api/entregamodos/test');
  });
router.post('/entregamodos/entregamodoAlta', EntregamodoController.createEntregamodo)
router.post('/entregamodos/entregamodoModificar', EntregamodoController.updateEntregamodo)
router.get('/entregamodos', EntregamodoController.getEntregamodos)



// Export the Router
module.exports = router;



//api/entregamodos
//api/entregamodos/entregamodoAlta
//api/entregamodos/entregamodoModificar
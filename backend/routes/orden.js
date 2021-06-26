var express = require('express')
var router = express.Router()
var OrdenController = require('../controllers/ordenes.controller');


// Authorize each API with middleware and map to the Controller Functions
/* GET ordenes listing. */
router.get('/ordenes/test', function(req, res, next) {
    res.send('Llegaste a la ruta de  api/ordenes/test');
  });
router.post('/ordenes/ordenAlta', OrdenController.createOrden)
router.post('/ordenes/ordenModificar', OrdenController.updateOrden)
router.get('/ordenes', OrdenController.getOrdenes)



// Export the Router
module.exports = router;



//api/ordenes
//api/ordenes/ordenAlta
//api/ordenes/ordenModificar
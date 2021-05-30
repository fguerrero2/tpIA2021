var express = require('express')
var router = express.Router()
var SucursalController = require('../controllers/sucursales.controller');


// Authorize each API with middleware and map to the Controller Functions
/* GET sucursales listing. */
router.get('/sucursales/test', function(req, res, next) {
    res.send('Llegaste a la ruta de  api/sucursales/test');
  });
router.post('/sucursales/sucursalAlta', SucursalController.createSucursal)
router.post('/sucursales/sucursalModificar', SucursalController.updateSucursal)
router.get('/sucursales', SucursalController.getSucursales)



// Export the Router
module.exports = router;



//api/sucursales
//api/sucursales/sucursalAlta
//api/sucursales/sucursalModificar
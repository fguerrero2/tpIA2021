var express = require('express')
var router = express.Router()
var ProductoController = require('../controllers/productos.controller');


// Authorize each API with middleware and map to the Controller Functions
/* GET productos listing. */
router.get('/productos/test', function(req, res, next) {
    res.send('Llegaste a la ruta de  api/productos/test');
  });
router.post('/productos/productoAlta', ProductoController.createProducto)
router.post('/productos/productoModificar', ProductoController.updateProducto)
router.get('/productos', ProductoController.getProductos)



// Export the Router
module.exports = router;



//api/productos
//api/productos/productoAlta
//api/productos/productoModificar
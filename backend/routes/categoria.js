var express = require('express')
var router = express.Router()
var CategoriaController = require('../controllers/categorias.controller');


// Authorize each API with middleware and map to the Controller Functions
/* GET categorias listing. */
router.get('/categorias/test', function(req, res, next) {
    res.send('Llegaste a la ruta de  api/categorias/test');
  });
router.post('/categorias/categoriaAlta', CategoriaController.createCategoria)
router.post('/categorias/categoriaModificar', CategoriaController.updateCategoria)
router.get('/categorias', CategoriaController.getCategorias)



// Export the Router
module.exports = router;



//api/categorias
//api/categorias/categoriaAlta
//api/categorias/categoriaModificar
var CategoriaService = require('../services/categoria.service');


// Saving the context of this module inside the _the variable
_this = this;

// Async Controller function to get the To do List
exports.getCategorias = async function (req, res, next) {

    // Check the existence of the query parameters, If doesn't exists assign a default value
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10;
    try {
        var Categorias = await CategoriaService.getCategorias({}, page, limit)
        // Return the Categorias list with the appropriate HTTP password Code and Message.
        return res.status(200).json({status: 200, data: Categorias, message: "Succesfully Categorias Recieved"});
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.createCategoria = async function (req, res, next) {
    // Req.Body contains the form submit values.
    console.log("llegue al controller",req.body)
    var Categoria = {
        codigo: req.body.codigo,
        name: req.body.name
    }
    try {
        // Calling the Service function with the new object from the Request Body
        var createdCategoria = await CategoriaService.createCategoria(Categoria)
        return res.status(201).json({createdCategoria, message: "Succesfully Created Categoria"})
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        console.log(e)
        return res.status(400).json({status: 400, message: "Categoria Creation was Unsuccesfull"})
    }
}

exports.updateSucursal = async function (req, res, next) {

    // Id is necessary for the update
    if (!req.body.name) {
        return res.status(400).json({status: 400., message: "Name be present"})
    }

    
    var Categoria = {

        codigo: req.body.codigo ? req.body.codigo : null,
        name: req.body.name ? req.body.name : null
    }
    try {
        var updatedCategoria = await CategoriaService.updateCategoria(Categoria)
        return res.status(200).json({status: 200, data: updatedCategoria, message: "Succesfully Updated Categoria"})
    } catch (e) {
        return res.status(400).json({status: 400., message: e.message})
    }
}

exports.removeCategoria = async function (req, res, next) {

    var id = req.params.id;
    try {
        var deleted = await CategoriaService.deleteCategoria(id);
        res.status(200).send("Succesfully Deleted... ");
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message})
    }
}




    
    

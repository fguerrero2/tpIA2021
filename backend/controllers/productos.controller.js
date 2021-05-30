var ProductoService = require('../services/producto.service');


// Saving the context of this module inside the _the variable
_this = this;

// Async Controller function to get the To do List
exports.getProductos = async function (req, res, next) {

    // Check the existence of the query parameters, If doesn't exists assign a default value
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10;
    try {
        var Productos = await ProductoService.getProductos({}, page, limit)
        // Return the Productos list with the appropriate HTTP password Code and Message.
        return res.status(200).json({status: 200, data: Productos, message: "Succesfully Productos Recieved"});
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.createProducto = async function (req, res, next) {
    // Req.Body contains the form submit values.
    console.log("llegue al controller",req.body)
    var Producto = {
        product_id: req.body.producto_id,
        name: req.body.name,
        descripcion: req.body.descripcion,
        composicion: req.body.composicion,
        price: req.body.price,
        img: req.body.img,
        text_img: req.body.text_img,
        categoria: req.body.categoria,
        stock: req.body.stock,
        size: req.body.size,
        colors: req.body.colors
    }
    try {
        // Calling the Service function with the new object from the Request Body
        var createdProducto = await ProductoService.createProducto(Producto)
        return res.status(201).json({createdProducto, message: "Succesfully Created Producto"})
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        console.log(e)
        return res.status(400).json({status: 400, message: "Producto Creation was Unsuccesfull"})
    }
}

exports.updateProducto = async function (req, res, next) {

    // Id is necessary for the update
    if (!req.body.producto_id) {
        return res.status(400).json({status: 400., message: "Name be present"})
    }

    
    var Producto = {
       
        product_id: req.body.producto_id ? req.body.producto_id : null,
        name: req.body.name ? req.body.name: null,
        descripcion: req.body.descripcion ? req.body.descripcion: null,
        composicion: req.body.composicion ? req.body.composicion: null,
        price: req.body.price ? req.body.price: null,
        img: req.body.img ? req.body.img: null,
        text_img: req.body.text_img ? req.body.text_img: null,
        categoria: req.body.categoria ? req.body.categoria: null,
        stock: req.body.stock ? req.body.stock: null,
        size: req.body.size ? req.body.size: null,
        colors: req.body.colors ? req.body.colors: null
    }
    try {
        var updatedProducto = await ProductoService.updateProducto(Producto)
        return res.status(200).json({status: 200, data: updatedProducto, message: "Succesfully Updated Producto"})
    } catch (e) {
        return res.status(400).json({status: 400., message: e.message})
    }
}

exports.removeProducto = async function (req, res, next) {

    var id = req.params.id;
    try {
        var deleted = await ProductoService.deleteProducto(id);
        res.status(200).send("Succesfully Deleted... ");
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message})
    }
}




    
    

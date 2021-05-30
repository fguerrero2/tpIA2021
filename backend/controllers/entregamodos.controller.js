var EntregamodoService = require('../services/entregamodo.service');


// Saving the context of this module inside the _the variable
_this = this;

// Async Controller function to get the To do List
exports.getEntregamodos = async function (req, res, next) {

    // Check the existence of the query parameters, If doesn't exists assign a default value
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10;
    try {
        var Entregamodos = await EntregamodoService.getEntregamodos({}, page, limit)
        // Return the Entregamodos list with the appropriate HTTP password Code and Message.
        return res.status(200).json({status: 200, data: Entregamodos, message: "Succesfully Entregamodos Recieved"});
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.createEntregamodo = async function (req, res, next) {
    // Req.Body contains the form submit values.
    console.log("llegue al controller",req.body)
    var Entregamodo = {
        codigo: req.body.codigo,
        name: req.body.name
    }
    try {
        // Calling the Service function with the new object from the Request Body
        var createdEntregamodo = await EntregamodoService.createEntregamodo(Entregamodo)
        return res.status(201).json({createdEntregamodo, message: "Succesfully Created Entregamodo"})
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        console.log(e)
        return res.status(400).json({status: 400, message: "Entregamodo Creation was Unsuccesfull"})
    }
}

exports.updateEntregamodo = async function (req, res, next) {

    // Id is necessary for the update
    if (!req.body.name) {
        return res.status(400).json({status: 400., message: "Name be present"})
    }

    
    var Entregamodo = {

        codigo: req.body.codigo ? req.body.codigo : null,
        name: req.body.name ? req.body.name : null
    }
    try {
        var updatedEntregamodo = await EntregamodoService.updateEntregamodo(Entregamodo)
        return res.status(200).json({status: 200, data: updatedEntregamodo, message: "Succesfully Updated Entregamodo"})
    } catch (e) {
        return res.status(400).json({status: 400., message: e.message})
    }
}

exports.removeEntregamodo = async function (req, res, next) {

    var id = req.params.id;
    try {
        var deleted = await EntregamodoService.deleteEntregamodo(id);
        res.status(200).send("Succesfully Deleted... ");
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message})
    }
}




    
    

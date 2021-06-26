var OrdenService = require('../services/orden.service');


// Saving the context of this module inside the _the variable
_this = this;

// Async Controller function to get the To do List
exports.getOrdenes = async function (req, res, next) {

    // Check the existence of the query parameters, If doesn't exists assign a default value
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10;
    try {
        var Ordenes = await OrdenService.getOrdenes({}, page, limit)
        // Return the Ordenes list with the appropriate HTTP password Code and Message.
        return res.status(200).json({status: 200, data: Ordenes, message: "Succesfully Ordenes Recieved"});
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.createOrden = async function (req, res, next) {
    // Req.Body contains the form submit values.
    console.log("llegue al controller",req.body)
    var Orden = {
        nro_orden: req.body.nro_orden,
        usuario: req.body.usuario,
        fecha: req.body.fecha,
        total: req.body.total,
        modo_entrega: req.body.modo_entrega,
        lugar_retiro: req.body.lugar_retiro,
        direccion_entrega: req.body.direccion_entrega,
        estado: req.body.estado,
        fecha_entrega: req.body.fecha_entrega,
        items: req.body.items
    }
    try {
        // Calling the Service function with the new object from the Request Body
        var createdOrden = await OrdenService.createOrden(Orden)
        return res.status(201).json({createdOrden, message: "Succesfully Created Orden"})
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        console.log(e)
        return res.status(400).json({status: 400, message: "Orden Creation was Unsuccesfull"})
    }
}

exports.updateOrden = async function (req, res, next) {

    // Id is necessary for the update
    if (!req.body.nro_orden) {
        return res.status(400).json({status: 400., message: "nro_orden be present"})
    }

    
    var Orden = {
       
        nro_orden: req.body.nro_orden ? req.body.nro_orden : null,
        usuario: req.body.usuario ? req.body.usuario : null,
        fecha: req.body.fecha ? req.body.fecha : null,
        total: req.body.total ? req.body.total : null,
        modo_entrega: req.body.modo_entrega ? req.body.modo_entrega : null,
        lugar_retiro: req.body.lugar_retiro ? req.body.lugar_retiro : null,
        direccion_entrega: req.body.direccion_entrega ? req.body.direccion_entrega : null,
        estado: req.body.estado ? req.body.estado : null,
        fecha_entrega: req.body.fecha_entrega ? req.body.fecha_entrega : null,
        items: req.body.items ? req.body.items : null
    }
    try {
        var updatedOrden = await OrdenService.updateOrden(Orden)
        return res.status(200).json({status: 200, data: updatedOrden, message: "Succesfully Updated Orden"})
    } catch (e) {
        return res.status(400).json({status: 400., message: e.message})
    }
}

exports.removeOrden = async function (req, res, next) {

    var id = req.params.id;
    try {
        var deleted = await OrdenService.deleteOrden(id);
        res.status(200).send("Succesfully Deleted... ");
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message})
    }
}




    
    

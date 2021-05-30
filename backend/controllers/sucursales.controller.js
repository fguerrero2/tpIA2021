var SucursalService = require('../services/sucursal.service');


// Saving the context of this module inside the _the variable
_this = this;

// Async Controller function to get the To do List
exports.getSucursales = async function (req, res, next) {

    // Check the existence of the query parameters, If doesn't exists assign a default value
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10;
    try {
        var Sucursales = await SucursalService.getSucursales({}, page, limit)
        // Return the Sucursales list with the appropriate HTTP password Code and Message.
        return res.status(200).json({status: 200, data: Sucursales, message: "Succesfully Sucursales Recieved"});
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.createSucursal = async function (req, res, next) {
    // Req.Body contains the form submit values.
    console.log("llegue al controller",req.body)
    var Sucursal = {
        name: req.body.name,
        descripcion: req.body.descripcion,
        direccion: req.body.direccion
    }
    try {
        // Calling the Service function with the new object from the Request Body
        var createdSucursal = await SucursalService.createSucursal(Sucursal)
        return res.status(201).json({createdSucursal, message: "Succesfully Created Sucursal"})
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        console.log(e)
        return res.status(400).json({status: 400, message: "Sucursal Creation was Unsuccesfull"})
    }
}

exports.updateSucursal = async function (req, res, next) {

    // Id is necessary for the update
    if (!req.body.name) {
        return res.status(400).json({status: 400., message: "Name be present"})
    }

    
    var Sucursal = {
       
        name: req.body.name ? req.body.name : null,
        descripcion: req.body.descripcion ? req.body.descripcion : null,
        direccion: req.body.direccion ? req.body.direccion : null
    }
    try {
        var updatedSucursal = await SucursalService.updateSucursal(Sucursal)
        return res.status(200).json({status: 200, data: updatedSucursal, message: "Succesfully Updated Sucursal"})
    } catch (e) {
        return res.status(400).json({status: 400., message: e.message})
    }
}

exports.removeSucursal = async function (req, res, next) {

    var id = req.params.id;
    try {
        var deleted = await SucursalService.deleteSucursal(id);
        res.status(200).send("Succesfully Deleted... ");
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message})
    }
}




    
    

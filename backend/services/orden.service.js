// Gettign the Newly created Mongoose Model we just created 
var Orden = require('../models/Orden.model');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

// Saving the context of this module inside the _the variable
_this = this

// Async function to get the Orden List
exports.getOrdenes = async function (query, page, limit) {

    // Options setup for the mongoose paginate
    var options = {
        page,
        limit
    }
    // Try Catch the awaited promise to handle the error 
    try {
        console.log("Query",query)
        var Ordenes = await Orden.paginate(query, options)
        // Return the Orden list that was retured by the mongoose promise
        return Ordenes;

    } catch (e) {
        // return a Error message describing the reason 
        console.log("error services",e)
        throw Error('Error while Paginating Ordenes');
    }
}

exports.createOrden = async function (orden) {
    // Creating a new Mongoose Object by using the new keyword
    
    var newOrden = new Orden({
        nro_orden: orden.nro_orden,
        usuario: orden.usuario,
        fecha: orden.fecha,
        total: orden.total,
        modo_entrega: orden.modo_entrega,
        lugar_retiro: orden.lugar_retiro,
        direccion_entrega: orden.direccion_entrega,
        estado: orden.estado,
        fecha_entrega: orden.fecha_entrega,
        items: orden.items
        })

    try {
        // Saving the Orden 
        var savedOrden = await newOrden.save();
        var token = jwt.sign({
            id: savedOrden._id
        }, process.env.SECRET, {
            expiresIn: 86400 // expires in 24 hours
        });
        return token;
    } catch (e) {
        // return a Error message describing the reason 
        console.log(e)    
        throw Error("Error while Creating Orden")
    }
}

exports.updateOrden = async function (orden) {
    
    var id = {nro_orden :orden.nro_orden}

    try {
        //Find the old Orden Object by the Id
        var oldOrden = await Orden.findOne(id);
    } catch (e) {
        throw Error("Error occured while Finding the Orden")
    }
    // If no old Orden Object exists return false
    if (!oldOrden) {
        return false;
    }
    //Edit the Orden Object
    oldOrden.nro_orden= orden.nro_orden
    oldOrden.usuario= orden.usuario
    oldOrden.fecha= orden.fecha
    oldOrden.total= orden.total
    oldOrden.modo_entrega= orden.modo_entrega
    oldOrden.lugar_retiro= orden.lugar_retiro
    oldOrden.direccion_entrega= orden.direccion_entrega
    oldOrden.estado= orden.estado
    oldOrden.fecha_entrega= orden.fecha_entrega
    oldOrden.items= orden.items
    try {
        var savedOrden = await oldOrden.save()
        return savedOrden;
    } catch (e) {
        throw Error("And Error occured while updating the Orden");
    }
}

exports.deleteOrden = async function (id) {

    // Delete the Orden
    try {
        var deleted = await Orden.remove({
            _id: id
        })
        if (deleted.n === 0 && deleted.ok === 1) {
            throw Error("Orden Could not be deleted")
        }
        return deleted;
    } catch (e) {
        throw Error("Error Occured while Deleting the Orden")
    }
}



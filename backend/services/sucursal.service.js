// Gettign the Newly created Mongoose Model we just created 
var Sucursal = require('../models/Sucursal.model');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

// Saving the context of this module inside the _the variable
_this = this

// Async function to get the User List
exports.getSucursales = async function (query, page, limit) {

    // Options setup for the mongoose paginate
    var options = {
        page,
        limit
    }
    // Try Catch the awaited promise to handle the error 
    try {
        console.log("Query",query)
        var Sucursales = await Sucursal.paginate(query, options)
        // Return the Userd list that was retured by the mongoose promise
        return Sucursales;

    } catch (e) {
        // return a Error message describing the reason 
        console.log("error services",e)
        throw Error('Error while Paginating Sucursales');
    }
}

exports.createSucursal = async function (sucursal) {
    // Creating a new Mongoose Object by using the new keyword
    
    var newSucursal = new Sucursal({
        name: sucursal.name,
        descripcion: sucursal.descripcion,
        direccion: sucursal.direccion
    })

    try {
        // Saving the Sucursal 
        var savedSucursal = await newSucursal.save();
        var token = jwt.sign({
            id: savedSucursal._id
        }, process.env.SECRET, {
            expiresIn: 86400 // expires in 24 hours
        });
        return token;
    } catch (e) {
        // return a Error message describing the reason 
        console.log(e)    
        throw Error("Error while Creating Sucursal")
    }
}

exports.updateSucursal = async function (sucursal) {
    
    var id = {name :sucursal.name}

    try {
        //Find the old User Object by the Id
        var oldSucursal = await Sucursal.findOne(id);
    } catch (e) {
        throw Error("Error occured while Finding the Sucursal")
    }
    // If no old Sucursal Object exists return false
    if (!oldSucursal) {
        return false;
    }
    //Edit the Sucursal Object
    oldSucursal.descripcion = sucursal.descripcion
    oldSucursal.direccion = sucursal.direccion
    try {
        var savedSucursal = await oldSucursal.save()
        return savedSucursal;
    } catch (e) {
        throw Error("And Error occured while updating the Sucursal");
    }
}

exports.deleteSucursal = async function (id) {

    // Delete the Sucursal
    try {
        var deleted = await Sucursal.remove({
            _id: id
        })
        if (deleted.n === 0 && deleted.ok === 1) {
            throw Error("Sucursal Could not be deleted")
        }
        return deleted;
    } catch (e) {
        throw Error("Error Occured while Deleting the Sucursal")
    }
}



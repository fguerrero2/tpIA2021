// Gettign the Newly created Mongoose Model we just created 
var Entregamodo = require('../models/Entregamodo.model');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

// Saving the context of this module inside the _the variable
_this = this

// Async function to get the User List
exports.getEntregamodos = async function (query, page, limit) {

    // Options setup for the mongoose paginate
    var options = {
        page,
        limit
    }
    // Try Catch the awaited promise to handle the error 
    try {
        console.log("Query",query)
        var Entregamodos = await Entregamodo.paginate(query, options)
        // Return the Userd list that was retured by the mongoose promise
        return Entregamodos;

    } catch (e) {
        // return a Error message describing the reason 
        console.log("error services",e)
        throw Error('Error while Paginating Entregamodo');
    }
}

exports.createEntregamodo = async function (entregamodo) {
    // Creating a new Mongoose Object by using the new keyword
    
    var newEntregamodo = new Entregamodo({
        codigo: entregamodo.codigo,
        name: entregamodo.name
    })

    try {
        // Saving the Entregamodo 
        var savedEntregamodo = await newEntregamodo.save();
        var token = jwt.sign({
            id: savedEntregamodo._id
        }, process.env.SECRET, {
            expiresIn: 86400 // expires in 24 hours
        });
        return token;
    } catch (e) {
        // return a Error message describing the reason 
        console.log(e)    
        throw Error("Error while Creating Entregamodo")
    }
}

exports.updateEntregamodo = async function (entregamodo) {
    
    var id = {codigo :entregamodo.codigo}

    try {
        //Find the old Entregamodo Object by the Id
        var oldEntregamodo = await Entregamodo.findOne(id);
    } catch (e) {
        throw Error("Error occured while Finding the Entregamodo")
    }
    // If no old Entregamodo Object exists return false
    if (!oldEntregamodo) {
        return false;
    }
    //Edit the Entregamodo Object
    oldEntregamodo.name = entregamodo.name
    try {
        var savedEntregamodo = await oldEntregamodo.save()
        return savedEntregamodo;
    } catch (e) {
        throw Error("And Error occured while updating the Entregamodo");
    }
}

exports.deleteEntregamodo = async function (id) {

    // Delete the Entregamodo
    try {
        var deleted = await Entregamodo.remove({
            _id: id
        })
        if (deleted.n === 0 && deleted.ok === 1) {
            throw Error("Entregamodo Could not be deleted")
        }
        return deleted;
    } catch (e) {
        throw Error("Error Occured while Deleting the Entregamodo")
    }
}



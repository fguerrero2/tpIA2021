// Gettign the Newly created Mongoose Model we just created 
var Categoria = require('../models/Categoria.model');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

// Saving the context of this module inside the _the variable
_this = this

// Async function to get the User List
exports.getCategorias = async function (query, page, limit) {

    // Options setup for the mongoose paginate
    var options = {
        page,
        limit
    }
    // Try Catch the awaited promise to handle the error 
    try {
        console.log("Query",query)
        var Categorias = await Categoria.paginate(query, options)
        // Return the Userd list that was retured by the mongoose promise
        return Categorias;

    } catch (e) {
        // return a Error message describing the reason 
        console.log("error services",e)
        throw Error('Error while Paginating Categorias');
    }
}

exports.createCategoria = async function (categoria) {
    // Creating a new Mongoose Object by using the new keyword
    
    var newCategoria = new Categoria({
        codigo: categoria.codigo,
        name: categoria.name
    })

    try {
        // Saving the Categoria 
        var savedCategoria = await newCategoria.save();
        var token = jwt.sign({
            id: savedCategoria._id
        }, process.env.SECRET, {
            expiresIn: 86400 // expires in 24 hours
        });
        return token;
    } catch (e) {
        // return a Error message describing the reason 
        console.log(e)    
        throw Error("Error while Creating Categoria")
    }
}

exports.updateCategoria = async function (categoria) {
    
    var id = {codigo :categoria.codigo}

    try {
        //Find the old Categoria Object by the Id
        var oldCategoria = await Categoria.findOne(id);
    } catch (e) {
        throw Error("Error occured while Finding the Categoria")
    }
    // If no old Categoria Object exists return false
    if (!oldCategoria) {
        return false;
    }
    //Edit the Categoria Object
    oldCategoria.name = categoria.name
    try {
        var savedCategoria = await oldCategoria.save()
        return savedCategoria;
    } catch (e) {
        throw Error("And Error occured while updating the Categoria");
    }
}

exports.deleteCategoria = async function (id) {

    // Delete the Categoria
    try {
        var deleted = await Categoria.remove({
            _id: id
        })
        if (deleted.n === 0 && deleted.ok === 1) {
            throw Error("Categoria Could not be deleted")
        }
        return deleted;
    } catch (e) {
        throw Error("Error Occured while Deleting the Categoria")
    }
}



// Gettign the Newly created Mongoose Model we just created 
var Producto = require('../models/Producto.model');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

// Saving the context of this module inside the _the variable
_this = this

// Async function to get the Producto List
exports.getProductos = async function (query, page, limit) {

    // Options setup for the mongoose paginate
    var options = {
        page,
        limit
    }
    // Try Catch the awaited promise to handle the error 
    try {
        console.log("Query",query)
        var Productos = await Producto.paginate(query, options)
        // Return the Producto list that was retured by the mongoose promise
        return Productos;

    } catch (e) {
        // return a Error message describing the reason 
        console.log("error services",e)
        throw Error('Error while Paginating Productos');
    }
}

exports.createProducto = async function (producto) {
    // Creating a new Mongoose Object by using the new keyword
    
    var newProducto = new Producto({
        product_id: producto.producto_id,
        name: producto.name,
        descripcion: producto.descripcion,
        composicion: producto.composicion,
        price: producto.price,
        img: producto.img,
        text_img: producto.text_img,
        categoria:producto.categoria,
        stock: producto.stock,
        size: producto.size,
        colors: producto.colors
        })

    try {
        // Saving the Producto 
        var savedProducto = await newProducto.save();
        var token = jwt.sign({
            id: savedProducto._id
        }, process.env.SECRET, {
            expiresIn: 86400 // expires in 24 hours
        });
        return token;
    } catch (e) {
        // return a Error message describing the reason 
        console.log(e)    
        throw Error("Error while Creating Producto")
    }
}

exports.updateProducto = async function (producto) {
    
    var id = {name :producto.producto_id}

    try {
        //Find the old Producto Object by the Id
        var oldProducto = await Producto.findOne(id);
    } catch (e) {
        throw Error("Error occured while Finding the Producto")
    }
    // If no old Producto Object exists return false
    if (!oldProducto) {
        return false;
    }
    //Edit the Producto Object
    oldProducto.name= producto.name
    oldProducto.descripcion= producto.descripcion
    oldProducto.composicion= producto.composicion
    oldProducto.price= producto.price
    oldProducto.img= producto.img
    oldProducto.text_img= producto.text_img
    oldProducto.categoria= producto.categoria
    oldProducto.stock= producto.stock
    oldProducto.size= producto.size
    oldProducto.colors= producto.colors
    try {
        var savedProducto = await oldProducto.save()
        return savedProducto;
    } catch (e) {
        throw Error("And Error occured while updating the Producto");
    }
}

exports.deleteProducto = async function (id) {

    // Delete the Producto
    try {
        var deleted = await Producto.remove({
            _id: id
        })
        if (deleted.n === 0 && deleted.ok === 1) {
            throw Error("Producto Could not be deleted")
        }
        return deleted;
    } catch (e) {
        throw Error("Error Occured while Deleting the Producto")
    }
}



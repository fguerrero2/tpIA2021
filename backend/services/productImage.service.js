// Gettign the Newly created Mongoose Model we just created 
var UserImg = require('../models/ProductImage.model');

var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

// Saving the context of this module inside the _the variable
_this = this

//configurar cloudinary
var cloudinary = require('cloudinary');
cloudinary.config({ 
    cloud_name: 'fguerrero2', //reemplazar con sus credenciales
    api_key: '896568674577933', 
    api_secret: 'yTeuFt3N7c8PppnSkq3OKE-HL-o'
});

// Async function to get the Contact List
exports.getImagenes = async function (query, page, limit) {

    // Options setup for the mongoose paginate
    var options = {
        page,
        limit
    }
    // Try Catch the awaited promise to handle the error 
    try {
        var Imagenes = await ProductImage.paginate(query, options)
        // Return the Contact list that was retured by the mongoose promise
        return Imagenes;

    } catch (e) {
        // return a Error message describing the reason 
        throw Error('Error while Paginating Images');
    }
}

// Async function to get the image list
exports.getImagenesByProduct = async function (query, page, limit) {

    // Options setup for the mongoose paginate
    var options = {
        page,
        limit
    }
    // Try Catch the awaited promise to handle the error 
    console.log("byProduct",query)
    try {
        var ProductImagenes = await ProductImage.paginate(query, options)
        // Return the Control list that was retured by the mongoose promise
        console.log("image by product",ProductImagenes)
        return ProductImagenes;

    } catch (e) {
        // return a Error message describing the reason 
        throw Error('Error while Paginating Desafios');
    }
}

async function savedProductImage (newProductImage)
{

    try {
        // Saving the Control 
        var savedProductImage = await newProductImage.save();
        
        return savedProductImage;
    } catch (e) {
        // return a Error message describing the reason 
    console.log(e)    
    throw Error("Error while Creating Imagen Product")
}
}
exports.createProductImage = async function (productImage) {
    
    //subir imagen a cloudinary
    console.log("productImage",productImage)
    let urlImg;
    let imagen = process.env.UPLOAD_DIR + productImage.nombreImagen;
    cloudinary.uploader.upload(imagen, function(result) { 
        console.log("Resultado",result);
        //urlImg=result.url;
        // Creating a new Mongoose Object by using the new keyword
        var newProductImage = new ProductImage({      
            idProduct: productImage.idProduct,
            nameProduct : productImage.nameProduct,
            date: new Date(),
            nombreImagen: result.url
        })
        
        savedProductImage(newProductImage);
    });
    
    
    
    
    
}




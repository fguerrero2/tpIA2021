// Gettign the Newly created Mongoose Model we just created 
var Product = require('../models/Product.model');

exports.listProducts = async function (query={}) {
    return await Product.find(query)
}

exports.createProduct = async function (data) {
    var product = new Product(data);
    try {
        await product.save()
        return product;
    } catch (e) {
        throw Error("And Error occured while saving the Product");
    }
}

exports.updateProduct = async function (id, data) {
    var product = await Product.findOne({_id: id});
    if (!product) {
        throw Error("Cannot find the product")
    }
    product.name = data.name
    product.description = data.description
    product.price = data.price
    product.img = data.img
    product.text_img = data.text_img
    product.category = data.category
    product.stock = data.stock
    product.sizes = data.sizes
    product.colors = data.colors
    try {
        await product.save()
        return product;
    } catch (e) {
        throw Error("And Error occured while updating the Product");
    }
}

exports.deleteProduct = async function (id) {
    try {
        await Product.remove({_id: id})
    } catch (e) {
        throw Error("Error Occured while Deleting the Producto")
    }
}

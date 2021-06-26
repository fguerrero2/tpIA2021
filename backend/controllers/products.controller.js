var ProductService = require('../services/products.service');

exports.listProducts = async function (req, res, next) {
    try {
        var products = await ProductService.listProducts()
        return res.status(200).json(products);
    } catch (e) {
        console.log(e)
        return res.status(400).json({message: e.message})
    }
}

exports.createProduct = async function (req, res, next) {
    var product = {
        name: req.body.name || "",
        description: req.body.description || "",
        price: req.body.price || 0,
        img: req.body.img || "",
        text_img: req.body.text_img || "",
        category: req.body.category || "",
        stock: req.body.stock || 0,
        sizes: req.body.sizes || ["S", "M", "L"],
        colors: req.body.colors || ["Azul", "Negro", "Verde"],
    }
    try {
        var product = await ProductService.createProduct(product)
        return res.status(201).json(product)
    } catch (e) {
        console.log(e)
        return res.status(400).json({message: e.message})
    }
}

exports.detailProduct = async function (req, res, next) {
    var id = req.params.id;
    try {
        var product = await ProductService.listProducts({_id: id})
        if (product) {
            return res.status(200).json(product[0])
        } else {
            return res.status(404).send("Not found")    
        }
    } catch (e) {
        console.log(e)
        return res.status(400).json({message: e.message})
    }
}    


exports.updateProduct = async function (req, res, next) {
    var id = req.params.id;
    var product = {
        name: req.body.name || "",
        description: req.body.description || "",
        price: req.body.price || 0,
        img: req.body.img || "",
        text_img: req.body.text_img || "",
        category: req.body.category || "",
        stock: req.body.stock || 0,
        sizes: req.body.sizes || ["S", "M", "L"],
        colors: req.body.colors || ["Azul", "Negro", "Verde"],
    }
    try {
        var product = await ProductService.updateProduct(id, product)
        return res.status(200).json(product)
    } catch (e) {
        console.log(e)
        return res.status(400).json({message: e.message})
    }
}

exports.deleteProduct = async function (req, res, next) {
    var id = req.params.id;
    try {
        await ProductService.deleteProduct(id);
        res.status(200).json({});
    } catch (e) {
        console.log(e)
        return res.status(400).json({message: e.message})
    }
}    

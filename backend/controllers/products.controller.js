var ProductService = require('../services/products.service');
var ProductImageService =require('../services/productImage.service');

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


exports.guardarImagenProduct = async function (req, res, next) {

    console.log("ImgProduct",req.body)
    // Id is necessary for the update
    if (!req.body.idProduct) {
        return res.status(400).json({status: 400., message: "idProduct must be present"})
    }

    let productImage = {
        idProduct: req.body.idProduct,
        nameProduct: req.body.nameProduct,
        nombreImagen : req.body.nombreImagen
    }
    
    try {
        if (userImg.nombreImagen!=='')
        {
            var newProductImage = await ProductImageService.createProductImage(productImage);
        }
        
        return res.status(201).json({status: 201, message: "Imagen cargada"});
        
    } catch (e) {
        console.log("error guardar imagen",e)
        return res.status(400).json({status: 400., message: e.message})
    }
}

exports.getImagenProductByProduct = async function (req, res, next) {

    // Check the existence of the query parameters, If doesn't exists assign a default value
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10;
    //obtener filtro
    var filtro = {
        idProduct: req.body.idProduct
    }
    try {
        var ProductImages = await ProductImageService.getImagenesByProduct(filtro, page, limit)
        // Return the Users list with the appropriate HTTP password Code and Message.
        console.log("imageByIdProduct",ProductImages)
        if (ProductImages.total===0)
            return res.status(201).json({status: 201, data: ProductImages, message: "No existe IdProduct"});
        else
            return res.status(200).json({status: 200, data: ProductImages, message: "Succesfully IdProduct Recieved"});
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        console.log(e)
        return res.status(400).json({status: 400, message: e.message});
    }
}

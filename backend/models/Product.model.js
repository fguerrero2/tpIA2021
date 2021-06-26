var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


const example = {
    "name": "Jean Clara",
    "description":"Nuestro fit skinny de tiro alto. Jean en tela super stretch, bolsillos...",
    "price": 5667,
    "img": "/statics/images/Productos/jean_1.jpg",
    "text_img": "jean_1",
    "category": "Jean",
    "stock": 100,
    "sizes": ["L", "M", "S"],
    "colors": ["black", "blue"]
}

var ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    img: String,
    text_img: String,
    category:String,
    stock: Number,
    sizes: [String],
    colors: [String],
})

ProductSchema.plugin(mongoosePaginate)
const Product = mongoose.model('Product', ProductSchema)

module.exports = Product;
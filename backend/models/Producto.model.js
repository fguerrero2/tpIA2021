var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var ProductoSchema = new mongoose.Schema({
    product_id: String,
    name: String,
    descripcion: String,
    composicion: String,
    price: Number,
    img: String,
    text_img: String,
    categoria:String,
    stock: Number,
    size: [{talle: String}],
    colors: [{color: String}]
})

ProductoSchema.plugin(mongoosePaginate)
const Producto = mongoose.model('Producto', ProductoSchema)

module.exports = Producto;
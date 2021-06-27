var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')

var OrdenItemSchema = new mongoose.Schema({
    item_id: String, 
    size: String,
    color: String, 
    quantity: Number, 
    subtotal : Number, 
    product_id:String, 
    name: String, 
    price:Number
})

var OrdenSchema = new mongoose.Schema({
    nro_orden: String,
    usuario: String,
    fecha: String,
    total: Number,
    modo_entrega: String,
    lugar_retiro: String,
    direccion_entrega: String,
    estado:String,
    fecha_entrega: String,
    items: [OrdenItemSchema]
})

OrdenSchema.plugin(mongoosePaginate)
const Orden = mongoose.model('Orden', OrdenSchema)

module.exports = Orden;
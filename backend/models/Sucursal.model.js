var mongoosePaginate = require('mongoose-paginate')
var mongoose = require('mongoose')


var SucursalSchema = new mongoose.Schema({
    name: String,
    descripcion: String,
    direccion: String
})

SucursalSchema.plugin(mongoosePaginate)
const Sucursal = mongoose.model('Sucursal', SucursalSchema)

module.exports = Sucursal;
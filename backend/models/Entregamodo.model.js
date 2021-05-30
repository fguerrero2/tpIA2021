var mongoosePaginate = require('mongoose-paginate')
var mongoose = require('mongoose')


var EntregamodoSchema = new mongoose.Schema({
    codigo: String,
    name: String
})

EntregamodoSchema.plugin(mongoosePaginate)
const Entregamodo = mongoose.model('Entregamodo', EntregamodoSchema)

module.exports = Entregamodo;
var mongoosePaginate = require('mongoose-paginate')
var mongoose = require('mongoose')


var CategoriaSchema = new mongoose.Schema({
    codigo: String,
    name: String
})

CategoriaSchema.plugin(mongoosePaginate)
const Categoria = mongoose.model('Categoria', CategoriaSchema)

module.exports = Categoria;
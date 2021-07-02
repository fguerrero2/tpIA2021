var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var ProductImageSchema = new mongoose.Schema({
    date: Date,
    idProduct: String,
    nameProduct : String,
    nombreImagen: String,
    img:
    {
        data: Buffer,
        contentType: String
    }    
})

ProductImageSchema.plugin(mongoosePaginate)
const ProductImage = mongoose.model('ProductImage', ProductImageSchema)

module.exports = ProductImage;
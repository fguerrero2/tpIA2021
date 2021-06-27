var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var OrderSchema = new mongoose.Schema({
    user_id: String,
    date: Date,
    status: String,  // cart | pending | done
    items: [{
        product_id: String,
        size: String,
        color: String,
        quantity: Number,
        price : Number,
    }]
})

OrderSchema.plugin(mongoosePaginate)
const Order = mongoose.model('Order', OrderSchema)

module.exports = Order;
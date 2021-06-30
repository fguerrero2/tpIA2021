var Order = require('../models/Order.model');


exports.listOrder = async function (query={}) {
    let orders = await Order.find(query)
    return orders
}

exports.getOrCreate = async function (query) {
    var order = await Order.findOne(query)
    if (!order) {
        order = new Order({
            user_id: query.user_id,
            date: new Date(),
            status: "cart",
            items: [],
        })
        await order.save()
    }
    return order
}

exports.addToCart = async function(user, data) {
    var order = await Order.findOne({user_id: user._id, status: "cart"})
    if (!order) {
        order = new Order({
            user_id: user._id,
            date: new Date(),
            status: "cart",
            items: [],
        })
    }
    order.date = new Date()
    order.items.push({
        product_id: data.product_id,
        size: data.size,
        color: data.color,
        quantity: data.quantity,
        price : data.price,
    })
    await order.save()
    return order
}
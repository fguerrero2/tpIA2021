var Order = require('../models/Order.model');

exports.listOrder = async function (query={}) {
    return await Order.find(query)
}

exports.getOrCreate = async function (user_id) {
    try {
        var order = await Order.findOne({user_id: user_id})
        if (!order) {
            order = new Order({
                user_id: user_id,
                date: new Date(),
                status: "cart",
                items: [],
            })
            await order.save()
        }
        return order
    } catch (e) {
        throw Error("And Error occured while saving the Order");
    }
}

var OrderService = require('../services/order.service');


exports.getOrders = async function (req, res, next) {
    try {
        var order = await OrderService.listOrder({status: "pending"})
        return res.status(200).json(products);
    } catch (e) {
        console.log(e)
        return res.status(400).json({message: e.message})
    }
}

exports.getOrderCart = async function (req, res, next) {
    try {
        var order = await OrderService.listOrder({user_id: req.user._id, status: "cart"})[0]
        if (!order) {
            order = await OrderService.getOrCreate(req.user._id)
        }
        return res.status(200).json(order);
    } catch (e) {
        console.log(e)
        return res.status(400).json({message: e.message})
    }
}

exports.postOrderCart = async function (req, res, next) {
    try {
        var order = await OrderService.getOrCreate(req.user._id)
        order.status = req.body.status || order.status
        order.items = req.body.items || order.items
        await order.save()
        return res.status(200).json(order);
    } catch (e) {
        console.log(e)
        return res.status(400).json({message: e.message})
    }
}

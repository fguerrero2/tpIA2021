var OrderService = require('../services/order.service');
var Product = require('../models/Product.model');
var User = require('../models/User.model');

async function presentItem(x) {
    let product = await Product.findOne({_id: x.product_id})
    return {
        id: x._id,
        product_id: x.product_id,
        size: x.size,
        color: x.color,
        quantity: x.quantity,
        price: x.price,
        subtotal: x.price * x.quantity,
        product: product,
    }
}

async function present(data) {
    let items = await Promise.all(data.items.map(presentItem))
    let user = await User.findOne({_id: data.user_id})
    let order = {
        _id: data._id,
        user_id: data.user_id,
        email: user.email,
        date: data.date,
        status: data.status,
        items: items,
    }
    order.total = order.items.reduce((a,b) => a+b.subtotal, 0);
    return order
}


exports.getOrders = async function (req, res, next) {
    try {
        var orders = await OrderService.listOrder({status: "pending"})
        orders = await Promise.all(orders.map(present))
        return res.status(200).json(orders);
    } catch (e) {
        console.log(e)
        return res.status(400).json({message: e.message})
    }
}

exports.getOrderCart = async function (req, res, next) {
    try {
        let order = await OrderService.getOrCreate({user_id: req.user._id, status: "cart"})
        order = await present(order)
        return res.status(200).json(order);
    } catch (e) {
        console.log(e)
        return res.status(400).json({message: e.message})
    }
}

exports.postOrderCart = async function (req, res, next) {
    try {
        var order = await OrderService.getOrCreate({user_id: req.user._id, status: "cart"})
        order.status = "pending"
        await order.save()
        order = await present(order)
        return res.status(200).json(order);
    } catch (e) {
        console.log(e)
        return res.status(400).json({message: e.message})
    }
}

exports.postOrderCartAdd = async function (req, res, next) {
    try {
        let order = await OrderService.addToCart(req.user, req.body)
        order = await present(order)
        return res.status(200).json(order);
    } catch (e) {
        console.log(e)
        return res.status(400).json({message: e.message})
    }
}

exports.deleteOrderCartItem = async function (req, res, next) {
    var id = req.params.id;
    console.log("delete order cart item", id)
    try {
        var order = await OrderService.getOrCreate({user_id: req.user._id, status: "cart"})
        order.items = order.items.filter((x) => x._id != id)
        await order.save()
        order = await present(order)
        return res.status(200).json(order);
    } catch (e) {
        console.log(e)
        return res.status(400).json({message: e.message})
    }
}
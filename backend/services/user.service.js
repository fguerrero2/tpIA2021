var User = require('../models/User.model');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

_this = this

function randomToken() {
    return (
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15)
    )
}

exports.createUser = async function (data) {
    var hashedPassword = bcrypt.hashSync(data.password, 8);
    var user = await User.findOne({email: data.email});
    if (user) {
        throw Error("User already exists")
    }
    user = new User({
        ...data,
        password: hashedPassword,
        token: randomToken(),
    })
    return await user.save();
}

exports.loginUser = async function (email, password) {
    var user = await User.findOne({email: email});
    if (!user) throw Error("Invalid username/password")
    var ok = bcrypt.compareSync(password, user.password);
    if (!ok) throw Error("Invalid username/password")
    user.token = randomToken()
    await user.save()
    return user
}

exports.authUser = async function (token) {
    return await User.findOne({token: token});
}

exports.logoutUser = async function (user) {
    user.token = null;
    await user.save();
    return user;
}
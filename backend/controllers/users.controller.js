var UserService = require('../services/user.service');


exports.createUser = async function (req, res, next) {
    var user = {
        email: req.body.email,
        password: req.body.password,
        first_name: req.body.first_name || "",
        last_name: req.body.last_name || "",
        is_staff: req.body.is_staff || false,
    }
    if (!user.email || !user.password) {
        return res.status(400).json({message: "Invalid fields"})
    }
    try {
        user = await UserService.createUser(user)
        response = {
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
            is_staff: user.is_staff,
            token: user.token,
        }
        return res.status(201).json(user)
    } catch (e) {
        return res.status(400).json({message: e.message})
    }
}

exports.loginUser = async function (req, res, next) {
    let email = req.body.email
    let password = req.body.password
    try {
        var user = await UserService.loginUser(email, password);
        response = {
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
            is_staff: user.is_staff,
            token: user.token,
        }
        return res.status(201).json(response)
    } catch (e) {
        console.log("error...", e)
        return res.status(400).json({message: "Invalid email or password"})
    }
}

exports.logoutUser = async function (req, res, next) {
    await UserService.logoutUser(req.user)
    return res.status(200).json({})
}

exports.ensureAuthenticated = async function (req, res, next) {
    if (!req.headers.authorization) {
      return res.status(403).send({ message: "authentication error" });
    }
  
    var token = req.headers.authorization.split(" ")[1];
    var user = await UserService.authUser(token)
    if (!user) {
        return res.status(403).send({ message: "authentication error" });
    }
    req.user = user;
    next();
};


exports.ensureIsStaff = async function (req, res, next) {
    if (!req.headers.authorization) {
        return res.status(403).send({ message: "authentication error" });
    }
    
    var token = req.headers.authorization.split(" ")[1];
    var user = await UserService.authUser(token)
    if (!user || !user.isStaff) {
        return res.status(403).send({ message: "authentication error" });
    }
    req.user = user;
    next();
}
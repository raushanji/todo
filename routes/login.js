var dbLogin = require('../models/login')
var jwt = require('jsonwebtoken')

module.exports = (req, res) => {
    if (!req.body.email || !req.body.password) {
        res.json({
            success: false,
            msg: "Please send all details"
        })
    } else {
        dbLogin.findOne({ email: req.body.email }, (err, loginData) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Error"
                })
            } else if (!loginData) {
                res.json({
                    success: false,
                    msg: "Please register first"
                })
            } else if (req.body.password != loginData.password) {
                res.json({
                    success: false,
                    msg: "Incorrect Password"
                })
            } else {
                var data = {
                    email: loginData.email,
                    name: loginData.name
                }
                var token = jwt.sign(data, 'secret')
                res.json({
                    success: true,
                    msg: "Login Successfull",
                    token: token
                })
            }
        })
    }
}
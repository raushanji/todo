var dbLogin = require('../models/login')

module.exports = (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.password) {
        res.json({
            success: false,
            msg: "Please enter all details"
        })
    } else {
        dbLogin.findOne({ email: req.body.email }, (err, loginData) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Please try afterr some time"
                })
            } else if (loginData) {
                res.json({
                    success: false,
                    msg: "You have already registered"
                })
            } else {
                new dbLogin({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                }).save((err, data) => {
                    if (err) {
                        res.json({
                            success: false,
                            msg: "Database error"
                        })
                    } else {
                        res.json({
                            success: true,
                            msg: "Registration done"
                        })
                    }
                })
            }
        })
    }
}
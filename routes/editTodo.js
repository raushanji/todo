var dbTodo = require('../models/todo')

var updateTodo = (req, res, next) => {
    if (!req.body.age) {
        res.json({
            success: false,
            msg: "Please enter all details."
        })
    } else {
        console.log(req.body.pincode)
        dbTodo.findOneAndUpdate({ email: req.body.email, createdBy: req.decoded.email }, { $set: { age: req.body.age, 'address.pincode': req.body.pincode } }, (err, data) => {
            if (err) {
                next(err)
            } else {
                res.json({
                    success: true,
                    msg: " Data Updated"
                })
            }
        })
    }
}

module.exports = updateTodo
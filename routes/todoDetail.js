var dbTodo = require('../models/todo')

var todoDetail = (req, res) => {
    console.log(req.body.email);
    dbTodo.find({ email: req.body.email.email }, (err, data) => {
        if (err) {
            res.json({
                success: false,
                msg: "Please try again after some time"
            })
        } else {
            res.json({
                success: true,
                msg: "All data",
                data: data
            })
        }
    })
}
module.exports = todoDetail
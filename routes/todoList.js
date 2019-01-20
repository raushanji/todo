var dbTodo = require('../models/todo')

var findTodo = (req, res) => {
    dbTodo.find({ createdBy: req.decoded.email }, (err, data) => {
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
module.exports = findTodo
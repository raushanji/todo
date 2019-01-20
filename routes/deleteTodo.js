var dbTodo = require('../models/todo')

var deleteTodo = (req, res) => {
    console.log(req.body.email);
    dbTodo.deleteOne({email: req.body.email}, (err) => {
        if (err) {
            res.json({
                success: false,
                msg: "Please try again after some time"
            })
        } else {
            res.json({
                success: true,
                msg: "Deleted Successfully",
            })
        }
    })
}

module.exports = deleteTodo
var dbTodo = require('../models/todo')

module.exports = (req, res) => {
    if (!req.body.name || !req.body.age) {
        res.json({
            success: false,
            msg: "Please enter all details"
        })
    } else {
        dbTodo.findOne({email: req.body.email}, (err, data)=>{
            if(err){
                res.json({
                    success: false,
                    msg: "Error. Please try again after some time."
                })
            }else if(data || data != null){
                res.json({
                    success: false,
                    msg: "User already exists."
                })
            }else{
                console.log(req.body)
                new dbTodo({
                    name: req.body.name,
                    age: req.body.age,
                    fathersName: req.body.fathersName,
                    phone: req.body.phone,
                    active: true,
                    createdBy: req.decoded.email,
                    email: req.body.email,
                    createdOn: new Date(),
                    address: {
                        line1: req.body.address.line1,
                        line2: req.body.address.line2,
                        city: req.body.address.city,
                        state: req.body.address.state,
                        pincode: req.body.address.pincode,
                        country: req.body.address.country
                    }
                }).save((err, data) => {
                    if (err) {
                        console.log(err)
                        res.json({
                            success: false,
                            msg: "Something went wrong. Please try again after some time."
                        })
                    } else {
                        res.json({
                            success: true,
                            msg: "New data created.",
                            daata: data
                        })
                    }
                })
            }
        })
        
    }

}
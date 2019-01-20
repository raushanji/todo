var mongoose = require('mongoose')
var Schema = mongoose.Schema

var login = new Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String
})

module.exports = mongoose.model('login', login)
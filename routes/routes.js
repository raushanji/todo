var express = require('express')
var app = express()
var tokenVerify = require('./tokenVerify')


var createTodo = require('./createTodo')
app.post('/createTodo', tokenVerify, createTodo)

var findTodo = require('./todoList')
app.get('/todoList', tokenVerify, findTodo)

var editTodo = require('./editTodo')
app.post('/editTodo', tokenVerify, editTodo)

var todoDetail = require('./todoDetail')
app.post('/todoDetail', tokenVerify, todoDetail)

var register = require('./register')
app.post('/register', register)

var login = require('./login')
app.post('/login', login)

var deleteTodo = require('./deleteTodo')
app.post('/delete', tokenVerify,  deleteTodo)



module.exports = app
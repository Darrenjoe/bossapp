const express = require('express')
const mongoose = require('mongoose')
//链接mongo 并且使用bossapp这个集合
const DB_URL = 'mongodb://localhost:27017/bossapp'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function() {
  console.log('mongo connect success')
})
// 类似于文档
const User = mongoose.model('user', new mongoose.Schema({
  user: {type: String, require: true},
  age: {type: Number, require: true}
}))
// 新增数据
// User.create({
//   user: 'Darren',
//   age: 18
// }, function(err, doc) {
//   if (!err) {
//     console.log(doc)
//   } else {
//     console.log(err)
//   }
// })



//新建app
const app = express()

app.get('/', function(req, res) {
  res.send('<h1>Hello World</h1>')
})
app.get('/data', function(req, res) {
  User.find({}, function(err, doc) {
    res.json(doc)
  })
  // res.json({name: 'Darren', type: 'IT'})
})
// app.get('/delete', function(req, res) {

// })

app.listen(9093, function() {
  console.log('Node app')
})
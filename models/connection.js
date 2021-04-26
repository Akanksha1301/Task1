const mongoose = require("mongoose")
const url = "mongodb://localhost:27017/task1"
mongoose.connect(url)
const db = mongoose.connection
console.log(" data base connected")
module.exports =  db
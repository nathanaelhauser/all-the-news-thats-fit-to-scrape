const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/newsdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, e => console.log(e))

module.exports = mongoose.connection
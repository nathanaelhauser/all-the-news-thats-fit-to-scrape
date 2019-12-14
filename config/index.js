const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/news_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, e => console.log(e))

module.exports = mongoose.connection
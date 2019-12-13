const express = require('express')
const { join } = require('path')

const app = express()
const db = require('./config')

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

db.once('open', () => {
  app.listen(3000)
})
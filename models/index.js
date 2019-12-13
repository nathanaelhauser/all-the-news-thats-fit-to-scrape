const { Schema, model } = require('mongoose')

module.exports = {
  Article: require('./Article')(Schema, model)
}
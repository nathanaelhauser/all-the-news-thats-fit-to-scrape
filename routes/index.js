module.exports = app => {
  require('./viewRoutes')(app)
  require('./articleRoutes')(app)
}
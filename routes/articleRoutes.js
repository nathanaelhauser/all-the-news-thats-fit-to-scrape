const { Article } = require('../models')

module.exports = app => {

  // Get all articles (READ)
  app.get('/articles', (req, res) => {
    Article.find((err, articles) => {
      if (err) {
        console.log(err)
      }
      res.json(articles)
    })
  })

  // Get one article (READ)
  app.get('/articles/:id', (req, res) => {
    Article.findOne({ _id: req.params.id }, (err, article) => {
      if (err) {
        console.log(err)
      }
      res.json(article)
    })
  })

  // Create one article (CREATE)
  app.post('/articles', (req, res) => {
    Article.create(req.body, (err, data) => {
      if (err) {
        console.log(err)
      }
      console.log(data)
      res.sendStatus(200)
    })
  })

  // Update one article (UPDATE)
  app.put('/articles/:id', (req, res) => {
    Article.findOneAndUpdate({ _id: req.params.id }, req.body, (err, data) => {
      if (err) {
        console.log(err)
      }
      console.log(data)
      res.sendStatus(200)
    })
  })

  // Delete one article (DELETE)
  app.delete('/articles/:id', (req, res) => {
    Articles.findOneAndDelete({ _id: req.params.id }, (err, data) => {
      if (err) {
        console.log(err)
      }
      res.sendStatus(200)
    })
  })

}
module.exports = (Schema, model) => model('Article', new Schema({
  title: String,
  summary: String,
  category: String,
  date: String,
  picture: String,
  url: String
}))
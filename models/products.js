const mongoose = require('mongoose')

const colorSchema = new mongoose.Schema({
  name: String,
  color: String
})

const productSchema = new mongoose.Schema({
  type: String,
  name: String,
  description: String,
  image: [String],
  colors: [colorSchema],
  sizes: [String],
  fds: String,
  boletim: String
})

const categorySchema = new mongoose.Schema({
  name: String,
  product: [productSchema]
})

const lineSchema = new mongoose.Schema({
  name: String,
  image: String,
  category: [categorySchema]
})

const catalogSchema = new mongoose.Schema({
  line: [lineSchema]
})

const catalogModel = mongoose.model('products', catalogSchema)

module.exports = catalogModel
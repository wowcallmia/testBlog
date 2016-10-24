const mongoose = require('mongoose'),
const moment = require('moment')

const blogSchema = new mongoose.Schema({
  name: String,
  description: String,
  createdBy: String,
  createdOn: String,
  messages: Array
})

const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog

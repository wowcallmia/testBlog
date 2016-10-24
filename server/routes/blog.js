const express = require('express'),
const router = express.Router(),
const Blog = require('../models/blog')

router.route('/')
  .put((req, res) => {
    Blog.find({})
      .then(blog => {
        blog.messages.unshift(req.body)
        return blog.save()
      })
      .then(savedBlog => {
        res.send(savedBlog)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  })
module.exports = router;

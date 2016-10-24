const express = require('express');

const router = new express.Router();

// connect other routers here!

router.use('/blog', require('./blog'));

module.exports = router;

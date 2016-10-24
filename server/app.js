const PORT = process.env.PORT || 8000,

const express = require('express'),
const webpack = require('webpack');
const path = require('path'),
const morgan = require('morgan'),
const mongoose = require('mongoose'),
const bodyParser = require('body-parser'),
const webpackConfig = require('../webpack.config.js');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackDevMiddleware = require('webpack-dev-middleware');
const app = express();

const api = require('./routes/api');
require('dotenv').config({ silent: true });



      MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/blogDB'




mongoose.Promise = Promise
mongoose.connect(MONGODB_URI, err => {
  console.log(err || `Mongo connected to ${MONGODB_URI}`)
})


app.use(cors())
app.use(morgan('dev'))
app.use(express.static('build'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  noInfo: true,
}));
app.use(webpackHotMiddleware(compiler));



app.use('/api', api);

app.get('*', (req, res) => {
  let filepath = path.resolve(__dirname, '../public');
  res.sendFile(filepath);
});



app.listen(PORT, err => {
  console.log(err || `Express listening on port ${PORT}`);
});

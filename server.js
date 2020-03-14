const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const restaurants = require('./routes/api/restaurants');

const app = express();

// Body Parser Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect('mongodb://mongo:27017/viaplay', { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use('/api/restaurants', restaurants);

const PORT = process.env.PORT || 3000;

console.log('Listening on port: ' + PORT);
app.listen(PORT);

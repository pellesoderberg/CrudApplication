const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Restaurants api routes
app.use('/api/restaurants', require('./routes/api/restaurants'));

// Connect to MongoDB
mongoose
  .connect('mongodb://mongo:27017/server', { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;

console.log('Listening on port: ' + PORT);
app.listen(PORT);

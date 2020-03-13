const express = require('express');
const path = require('path');

const app = express();

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Restaurants api routes
app.use('/api/restaurants', require('./routes/api/restaurants'));

const PORT = process.env.PORT || 5000;

console.log('Listening on port: ' + PORT);
app.listen(PORT);

const express = require('express');
const path = require('path');

// App
const app = express();

// Load routes
const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes);


//profile .
app.use('/',express.static(path.join(__dirname, '../client/build/')));

// pikachu game
app.use('/pikachustrikesback',express.static(path.join(__dirname, '../pikachustrikesback/')));


module.exports = app;
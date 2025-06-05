const express = require('express');
// const handlebars = require('express-handlebars');
const path = require('path');

const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');

const app = express();
const PORT = 5000;


expressConfig(app);
handlebarsConfig(app);


app.use(homeController);
app.use('/cubes', cubeController);


//app.get('/', homeController.getHome);
// require('./config/expressConfig')(app); => this works!!!
// Express config:
// app.use(express.static('src/public')); => this works!


app.listen(PORT, () => console.log(`Server is running on port: ${PORT}... `));
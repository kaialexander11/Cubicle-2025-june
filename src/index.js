const express = require('express');
//const handlebars = require('express-handlebars');
const path = require('path');

const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');

const app = express();

const PORT = 5000;

expressConfig(app);
handlebarsConfig(app);

// require('./config/expressConfig')(app); => this works!!!

// Express config:
//app.use(express.static('src/public')); => this works!

// Routes: 
app.get('/', (req, res) => {
    //res.send('Hello from Express!');
    res.render('index');
});


app.listen(PORT, () => console.log(`Server is running on port: ${PORT}... `));
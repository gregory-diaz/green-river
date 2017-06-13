const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
var path = require('path')
var router = express.Router();

//Set up express app

const app = express();
//Configure Express to use PUG
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Make hompage the root template
app.get("/", (req, res) => {
    res.render("homepage");
});

// Require our routes into the application 
require('./server/routes')(app);
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of everything .'
}));



module.exports = app;


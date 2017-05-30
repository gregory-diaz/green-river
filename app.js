const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

//Set up express app

const app = express();
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Setup a default catch all route that sends back a welcome message im JSON format
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of everything .'
}));

module.exports = app;


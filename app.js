const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
var path = require('path')
var router = express.Router()
var io = require('socket.io')

//Set up express app

const app = express();
// todo: Test changes to www then uncomment if needed
// var server = require('http').createServer(app);
// var io = require('socket.io')(server);
console.log("******  Dirname *******");
console.log(path.join(__dirname, 'node_modules'))

//Configure Express to use PUG
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use('/static',express.static(path.join(__dirname, 'node_modules')));
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Make hompage the root template
app.get("/", (req, res) => {
    //see if res.send(homepage.pug);
    res.render("homepage");
});

// Page that lists all todos in the system and
app.get("/todos", (req,res) => {
    res.render("product-detail")
});

// Page gets todo by ID and  
app.get("/todo-detail/:todoId", (req,res)=>{
    console.log("***** TODO Title ***********");
    console.log(req.params);

    res.render("todo-detail", {todoID:req.params.todoId,todoTitle: req.params.title})
});

// Experimental page with socket io
app.get("/socket-server", (req,res) => {
    res.render("socket-server")
});

// Require our routes into the application 
require('./server/routes')(app);
// app.get('*', (req, res) => res.status(200).send({
//     message: 'Welcome to the beginning of everything .'
// }));



module.exports = app;


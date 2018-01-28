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
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Make hompage the root template
app.get("/", (req, res) => {
    //see if res.send(homepage.pug);
    res.render("homepage");
});

app.get("/products", (req,res) => {
    res.render("product-detail")
});

app.get("/todo-detail/:todoId", (req,res)=>{
    console.log("***** Request Params *****")
    console.log(req.params)
    res.render("todo-detail", {todoID:req.params.todoId,todoTitle: req.params.title})
});
// Require our routes into the application 
require('./server/routes')(app);
// app.get('*', (req, res) => res.status(200).send({
//     message: 'Welcome to the beginning of everything .'
// }));



module.exports = app;


var express = require("express");
var expressHandlebars = require("express-handlebars");
// var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3030;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.engine("handlebars", expressHandlebars({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");
app.use(routes);

app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:"+PORT);
});
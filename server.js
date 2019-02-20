var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');



var app = express();
var PORT = process.env.PORT||8080;

app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())

require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routs.js')(app);

app.listen(PORT, function(){
    console.log("App listening on Port: " + PORT);
});
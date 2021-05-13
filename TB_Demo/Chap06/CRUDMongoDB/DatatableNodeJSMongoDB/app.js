var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
//var dotenv = require('dotenv');
var mongoose = require('mongoose');

// Load environment variables from .env file
//dotenv.load();
mongoose.connect("mongodb://localhost:27017/AIEN12DB");

mongoose.connection.on('error', function(err) {
  console.log('MongoDB Connection Error. Please make sure that MongoDB is running.'+err);
  process.exit(1);
});

//initialize app to use body-parser .This will help in reading the  http post requests.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./public'));

var HomeController = require('./controller/home.js');

// viewed at http://localhost:8080
app.get('/',function(req, res) {
    res.sendFile(path.join(__dirname + '/view/index.html'));
});

app.post('/GetProducts', HomeController.GetProducts);
app.post('/InsertProduct', HomeController.InsertProduct);
app.put('/UpdateProduct', HomeController.UpdateProduct);
app.delete('/DeleteProduct/:id', HomeController.DeleteProduct);

app.listen(8080);
var express = require('express');//node package
var path = require('path');//nodejs component
var bourne = require("bourne");//node package

var app = express();//express application object
var posts = new Bourne("simpleBlogPosts.json");
var comments = new Bourne("simpleBlogComments.json");


app.configure(function(){
  app.use(express.json());//parses json request bodies sent to server
  app.use(express.static(path.join(__dirname, 'public')));//serve files from path given as parameter
});

app.get('/*', function(request, response){
  res.render("index.ejs");
});

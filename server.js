var express = require('express');//node package
var path = require('path');//nodejs component
var Bourne = require("bourne");//node package


var app = express();//express application object
var posts = new Bourne("simpleBlogPosts.json");
var comments = new Bourne("simpleBlogComments.json");


//app.configure(function(){
  app.use(express.json());//parses json request bodies sent to server
  app.use(express.static(path.join(__dirname, 'public')));//serve files from path given as parameter
// });

app.get("/posts", function(req, res){
  posts.find(function (results){
    res.json(results);
    console.log(results);
  });
});

app.post("/posts", function(req, res){
  posts.insert(req.body, function(result){
    res.json(result);
    console.log(result);
  });
});

app.get('/*', function(req, res){
  res.render("index.ejs");//renders server side template
});

app.listen(3000);

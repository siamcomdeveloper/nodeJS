console.log('Express');
var express = require('express');
var routing = express();
routing.get('/',function(req,res){
  res.send("<h1>Helloworld</h1>");
});
routing.get('/about/:name',function(req,res){
  res.send("<h1>About " + req.param.name +"</h1>");
});
routing.get('/contact',function(req,res){
  res.send("<h1>Contact</h1>");
});
routing.listen(8080);

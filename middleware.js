console.log('Middleware');
var express = require('express');
var app = express();
app.get('/',function(req,res){
  res.send("<h1>Helloworld</h1>");
});
//Midleware = use
app.use('/user/about/:name',function(req,res,next){
  console.log("Requrest : " + req.params.name + " " + new Date() , req.method , req.url);
});
app.listen(8080);

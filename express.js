console.log('Express');
var express = require('express');
var routing = express();
routing.get('/',function(req,res){
  res.send("<h1>Helloworld</h1>");
});
routing.listem(8080);

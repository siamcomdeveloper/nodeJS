console.log('Cookie');
var express = require('express');
var cookie = require('cookie-parser');
var app = express();
//use body for POST
app.use(cookie());
//set view
app.set('view engine','ejs');
app.get('/createCookie',function(req,res){
  res.cookie('myCookie','siam');
  res.end("Create Cookie Complete");
});
app.get('/deleteCookie',function(req,res){
  res.clearCookie('myCookie');
  res.end("Delete Cookie Complete");
});
app.listen(8080);

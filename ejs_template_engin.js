console.log('EJS Template Engin');
var express = require('express');
var app = express();
//set view
app.set('view engine','ejs');
app.get('/profiles',function(req,res){
  res.render('profiles');
});
app.listen(8080);

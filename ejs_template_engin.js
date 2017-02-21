console.log('EJS Template Engin');
var express = require('express');
var app = express();
//set view
app.set('view engin','ejs');
app.get('/',function(req,res){
  res.render('about');
});
app.listen(8080);

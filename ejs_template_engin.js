console.log('EJS Template Engin');
var express = require('express');
var app = express();
//set view
app.set('view engine','ejs');
app.get('/',function(req,res){
  res.render('index');
});
app.get('/profiles/:id',function(req,res){
  var data={name:"siam",job:"developer",age:27};
  res.render('profiles',{id:req.params.id,user:data});
});
app.get('/admin',function(req,res){
  res.render('database');
});
app.listen(8080);
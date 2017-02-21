console.log('EJS Template Engin');
var express = require('express');
var app = express();
//set view
app.set('view engine','ejs');
app.get('/profiles/:name',function(req,res){
  var data={user:"siam",job:"developer",age:27};
  res.render('profiles',{pserson:req.params.name,user:data});
});
app.listen(8080);

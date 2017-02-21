console.log('Post Method');
var express = require('express');
var body = require('body-parser');
var app = express();
//use body for POST
app.use(body());
//set view
app.set('view engine','ejs');
app.get('/showForm',function(req,res){
  res.sendFile(__dirname + "/" + "form.html");
});
app.post('/showData',function(req,res){
  data={
    fname:req.body.fname,
    lname:req.body.lname
  };
  console.log(data);
  res.end("<h1>" + data.fname + "</h1>");
});
app.listen(8080);

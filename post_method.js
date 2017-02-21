console.log('Get Method');
var express = require('express');
var app = express();
//set view
app.set('view engine','ejs');
//POST
app.post('/showForm',function(req,res){
  res.sendFile(__dirname + "/" + "form.html");
});
app.post('/showData',function(req,res){
  data={
    fname:req.query.fname,
    lname:req.query.lname
  };
  console.log(data);
  res.end(JSON.stringify(data));
});
app.listen(8080);

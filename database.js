var express = require('express');
var mysql = require('mysql');
var app = express();
var con = mysql.createConnection({
// propertis...
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'blogs'
});

con.connect(function(err){
  if(err){
    console.log('Error');
  } else{
    console.log('Connected');
  }
});

app.get('/', function(req, resp){
  con.query("SELECT * FORM BLOGS", function(err, rows, fields){
    if(err){
      console.log('Error in the query');
    } else{
      console.log('Successful query');
    }
  });
});

app.listen(8080);

var express = require('express');
var mysql = require('mysql');
var app = express();
var con = mysql.createConnection({
// propertis...
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'blog'
});

con.connect(function(err){
  if(err){
    console.log('Error');
  } else{
    console.log('Connected');
  }
});

app.get('/', function(req, resp){
  con.query("SELECT * FROM blogs", function(err, rows, fields){
    if(err){
      console.log('Error in the query ' + err.stack);
    } else{
      console.log('Successful query');
      console.log(rows);
      console.log('rows[0] = ' + rows[0]);
      console.log('rows[0].topic = ' + rows[0].topic);
      resp.send("Topic is " + rows[0].topic);
    }
  });
});

app.listen(8080);

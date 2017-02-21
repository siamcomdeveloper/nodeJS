var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.get("/bootstrap", function(req, res){
  res.render("main")
});

app.listen(8080, function(){
  console.log('Server up 8080');
});

console.log('Serving HTML Page');
var fs = require('fs');
var http = require('http');
http.createServer(function(req,res){
  res.writeHead(200,{'content-Type':"text/planin"});
  var myStream = fs.createReadStream(__dirname + "/" + 'index.html' ,'utf8');
  myStream.pipe(res);
}).listen(8080);

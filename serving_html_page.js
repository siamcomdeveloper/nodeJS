/*console.log('Create Server');
var http = require('http');
http.createServer(function(req,res){
  res.writeHead(200,{'content-Type':"text/planin"});
  res.end("Helloworld");
}).listen(8080);*/

console.log('Create Server');
var http = require('http');
http.createServer( function(req,res) {
  res.writeHead(200,{'Content-Type':'text/plain'});
  res.end("Helloworld");
}).listen(8080);

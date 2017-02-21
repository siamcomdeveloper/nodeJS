console.log('Routing');
var fs = require('fs');
var http = require('http');
http.createServer(function(req,res){
  if(req.url === '/home' || req.url === '/' ){
    res.writeHead(200,{'content-Type':"text/html"});//200 = Ok
    var myStream = fs.createReadStream(__dirname + "/" + 'index.html' ,'utf8');
  }
  else if(req.url === '/about'){
    res.writeHead(200,{'content-Type':"text/html"});
    var myStream = fs.createReadStream(__dirname + "/" + 'about.html' ,'utf8');
  }
  else if(req.url === '/contact'){
    res.writeHead(200,{'content-Type':"text/html"});
    var myStream = fs.createReadStream(__dirname + "/" + 'contact.html' ,'utf8');
  }
  else{
    res.writeHead(404,{'content-Type':"text/html"});//404 = Error
    var myStream = fs.createReadStream(__dirname + "/" + 'notfound.html' ,'utf8');
  }
  myStream.pipe(res);
}).listen(8080);

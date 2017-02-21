var http =require('http');
http.createServer(fucntion(req,res){
  res.writeHead(200,{'content-Type':"text/planin"});
  res.end("Helloworld");
}).listen(8080,'127.0.0.1');

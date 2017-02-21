console.log('Create Server');
http.createServer( function(req,res) {
  res.writeHead(200,{'content-Type':'text/plain'});
  res.end("Helloworld");
}).listen(8081,'54.169.196.245');

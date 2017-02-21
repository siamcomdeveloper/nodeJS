console.log('JSON Data');
var fs = require('fs');
var http = require('http');
var myuser={
  "name" : "siam",
  "job" : "developer",
  "age" : 26
}
http.createServer(function(req,res){
  res.writeHead(200,{'content-Type':"application/json"});
  //var myStream = fs.createReadStream(__dirname + "/" + 'index.html' ,'utf8');
  //myStream.pipe(res);
  res.end(JSON.stringify(myuser));
}).listen(8080);

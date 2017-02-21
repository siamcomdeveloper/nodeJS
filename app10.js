console.log("Stream Writer");
var fs = require('fs');
var data = 'Siam Ngan';
var writeStream = fs.createWriteStream('output.txt');
writeStream.write(data,'utf8');
writeStream.end();
writeStream.on('finish',function(){
  console.lof("output Finish");
});

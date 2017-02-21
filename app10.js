console.log("Stream Writer");
var fs = require('fs');
var data = 'Siam Ngan';
var writeStream = fs.createWriteStream('output.txt');
writeStream.write(data,'utf8');
writeStream.end();
wrteStream.on('finish',fucntion(){
  console.lof("output Finish");
});

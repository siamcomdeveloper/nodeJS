var fs = require('fs');
var readStream = fs.createReadStream('code.txt','utf8');
readStream.setEncoding('utf8');
console.log(readStream);

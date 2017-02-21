console.log('File System Read');
var fs = require('fs');
var readMe=fs.readFileSync('code.txt','utf8');
console.log(readMe);

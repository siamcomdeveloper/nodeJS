console.log('File System Write');
var fs = require('fs');
var readMe = fs.readFileSync('code.txt','utf8');
fs.mkdir('Project',function(){
  fs.writeFileSync('./Project/Readme.txt',readMe);
}

console.log("Pipe");
var fs = require('fs');
var reader = fs.createReadStream('code.txt');
var writer = fs.createWriteStream('file1.txt');
writer.write(data,'uft8');
writer.on('finish',function(){
  console.log("Output Finish");
});
reader.pipe(writer);

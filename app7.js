console.log("Buffer");
var buf = new Buffer(10);
console.log(buf);
var buf2 = new Buffer("siam",'utf8');
console.log(buf2.toString());
var buf3 = new Buffer(200);
len = buf3.write("SIAM");
console.log(len);

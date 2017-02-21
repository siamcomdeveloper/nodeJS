console.log("Buffer");
var buf = new Buffer(10);
console.log(buf);

var buf2 = new Buffer("siam",'utf8');
console.log(buf2.toString());

var buf3 = new Buffer(200);
len = buf3.write("SIAM");
console.log(len);

var buf4 = new Buffer(4);
buf4.write("SIAM");
console.log(buf4.toString());

var buf5 = new Buffer(25);
for (var i = 0; i < 25; i++){
  buf5[i] = i + 97;
}
console.log(buf5.toString());
console.log(buf5.toString('ascii'));

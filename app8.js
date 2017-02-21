var buf1 = new Buffer("siam");
var buf2 = new Buffer("ngan");
var buf3 = Buffer.concat([buf1,buf2]);
console.log(buf3.toString());

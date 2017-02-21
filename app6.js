console.log("Global Object");
console.log(__filename);
console.log(__dirname);

function printHello(){
  console.log("Hello");
}
var t = setTimeout(printHello,1000);
clearTimeout(t);

setInterval(printHello,2000);

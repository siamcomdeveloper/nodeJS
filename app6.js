console.log("Global Object");
console.log(__filename);
console.log(__dirname);

function printHello(){
  console.log("Hello");
}
var t = setTimeout(printHello,100);
clearTimeout(t);

setInterval(printHello,2000);

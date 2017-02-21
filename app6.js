console.log("Global Object");
console.log(__filename);
console.log(__dirname);

function printHello(){
  console.log("Hello");
}

function printWorld(){
  console.log("World");
}
var t = setTimeout(printHello,1000);
//clearTimeout(t);
setInterval(printWorld,2000);

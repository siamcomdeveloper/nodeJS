console.log("Global Object");
console.log(__filename);
console.log(__dirname);

function printHello(){
  console.log("Hello");
}
setTimeout(printHello,2000);

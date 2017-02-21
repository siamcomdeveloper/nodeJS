console.log('Module Export Require');
var response = require('./method.js');
console.log(response.update());
console.log(response.pi);
console.log(response.data);
response.data.updateData();
response.data.deleteUser();

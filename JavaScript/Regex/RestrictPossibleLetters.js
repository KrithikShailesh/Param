// Change the regex userCheck to fit the constraints listed above.

let username = "BadUs3rnam3";
let userCheck = /^[A-Z]{2,}\d*$/i ; // Change this line
let result = userCheck.test(username);
console.log(result);
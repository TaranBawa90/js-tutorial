const accountId=144553
let accountEmail="taran@gmail.com"
var accountPassword="12345"
accountCity="Jaipur"
let accountstate;

// accountId=2         not allowed
accountEmail="abc@gmail.com"
accountPassword="123456"
accountCity="Bangalore"
console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity])
/*
use let and const
not var 
bcz var is function scope
let is block scope
*/ 
console.log(accountstate);
// not initialised --> undefined
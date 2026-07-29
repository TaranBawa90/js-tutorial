let age="19abc"

console.log(typeof age);

let value=Number(age)
console.log(typeof value);
console.log(value);

let name=null
console.log(typeof name);
let nameInNumber=Number(name)
console.log(nameInNumber)

let isLogged=1
let isLoggedBoolean=Boolean(isLogged)
console.log(isLoggedBoolean)

let isLoggedIn="trn"
let bool=Boolean(isLoggedIn)
console.log(bool)

//"19"--> 19
//"33abc"-->NaN
//true--> 1
//"trn"--> true
//""(empty string)-->false

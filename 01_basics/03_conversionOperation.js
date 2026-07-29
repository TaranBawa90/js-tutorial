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


// *******************Operations*******************
let num=3
let negative=-num
console.log(negative)

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(2%2)
console.log(2**2)    //exponent

let str1="hello"
let str2="world"
let str3=str1+str2
console.log(str3)

console.log(2+"1")
console.log("1"+2+2);    //phle string thi to sari string mein ayi
console.log(1+2+"2")     //phle numbers the to add hue normally fir string 

//use parenthesis for better understanding of operations

let gameCounter=10;
console.log(gameCounter++)       //first print then increment
console.log(gameCounter)
console.log(++gameCounter)       //first increment then print
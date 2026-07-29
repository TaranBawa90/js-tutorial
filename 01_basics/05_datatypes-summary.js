//primitive and non primitive datatypes on based on how they are stored in memory and how they are accessed

//Primitive --> Call by value
// 7 types
// String
// Number
// Boolean
// null
// undefined
// Symbol
// BigInt

//Symbol declaration
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId)  //--> false

const bigNumber=923456789876543876543n                //BigInt  (n)


// Non Primitive / reference
// Array
// Objects (Imp)
// Functions

const person=["abc","xyz","pqr"]
let myObj = {
    name:"taran",
    // age=19
}

const myFunction = function(){
    console.log("hello world")
}

console.log(typeof myFunction)      //function
//Imp topic --> Browser events

//Javascript - dynamically typed
//We don't need to declare datatype of variable along with it


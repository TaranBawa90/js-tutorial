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


// Non Primitive OR  reference
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

// ******************************Stack,heap memory***********************

//Stack -- Primitive
// Heap -- Non -Primitive

//stack -- copy of value
//heap --  reference 

let name1="taran"


//name in stack
//userOne variable in stack but the properties in heap , userOne gets the reference of properties  

//humare pass two variable h
//var1 and var2
//humne var2 ke andar var 1 ki value daali
//var 1 and var2 are primitive
//if we change var2 to var1 will not change bcz
//stack mein copy of value hoti h donot affect original value


//Suppose humare pass 2 variable h nonprimitive
//user1 and user2
//dono object h
//user1 and user2 dono ke variable ke aam stack mein jaayenge 
//pr jo unki properties hongi e.g email vo heap mein jaegi
//agr hum user1=user2
//user1 ke andar user2 ki properties daalte h
//user1 and user2 both will refer to same object (dono ki reference same )
// email agr hum user2 ke andr change krenge to automatically original yaani user1 mein change hoga

let user1={
    email:"abc@gmail.com"
}
let user2=user1
user2.email="xyzgmail.com"
console.log(user1.email)
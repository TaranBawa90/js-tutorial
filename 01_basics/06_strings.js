const name="trn"
const age=19

// console.log(name+age+" Indian")

console.log(`Hello my name is ${name} .my age is ${age}`)
//placeholders ${ }  //better //backticks

const Game=new String("pubg")
// ye ek object h index ke sath ,index h pr ye array nhi , ye ek key value pair h
console.log(Game[0]);
console.log(Game.__proto__);
// A prototype is simply an object that stores properties and methods that other objects can share.

console.log(Game.charAt(3));
console.log(Game.indexOf("g"));

console.log(Game.slice(0,2))     //0,1 included , 2 not included
console.log(Game.substring(1,3))  //3 not included

const str="   hello  "
console.log(str.trim());            //remove spaces
console.log(Game.replace("ubg","ool"))

const Name="Taranpreet Kaur Bawa"
console.log(Name.split(" "))         //array


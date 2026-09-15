const myarr=[0,1,2,3,4,5,true,'t']
const myArr2=new Array(1,2,3)
// are resizable
// index start from 0
// when we copy arrays js make shallow copy - whose property share same reference
console.log(myarr[0]);

//Methods

myarr.push(7)
myarr.push(8)
myarr.pop()        // last value remove

myarr.unshift(9)       // insert at starting (all indexes shift)
myarr.shift()          // remove first index(0)

console.log(myarr);
console.log(myarr.includes(9));         //boolean type
console.log(myarr.indexOf(9));          // if not exist than -1

const newArr=myarr.join();            //adds all elements to string
console.log(myarr);
console.log(newArr);                 // returns string 

//slice,splice

console.log("A ",myarr);

const myn1=myarr.slice(1,3);           // returns section of array last index not included

console.log(myn1);              
console.log(myarr);


const myn2=new myarr.splice(1,3);

console.log(myarr);
console.log(myn2);

///IMPP 
//splice changes original array whereas slice makes new aaray
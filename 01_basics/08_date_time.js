//DATES


//usually calculated in milliseconds
//TC39

let myDate = new Date()     //current date
console.log(myDate);
console.log(myDate.toString());         //readable
console.log(myDate.toDateString());     //only date no time
console.log(myDate.toISOString());      //both date and time but not fully readable
console.log(myDate.toLocaleString());   // both date and time fully readable 
console.log(myDate.toJSON());           // same as iso string
console.log(myDate.toLocaleTimeString());    //only time


console.log(typeof myDate);        // object

//month start from 0 in js in array but in string it start from 1

let myCreatedDate=new Date(2023 ,0,23)            
// let myCreatedDate=new Date("2023-01-23")      //yy-mm-dd
// let myCreatedDate=new Date("02-23-2026")      //mm-dd-yy
console.log(myCreatedDate.toLocaleString());

let myTimestamp=Date.now()  //give current timein millisecinds
 
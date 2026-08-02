//*************************Numbers

const score = 400
console.log(score);

const balance= new Number(100)        //explicitly declare as Number
console.log(balance);                 //type --> Number

console.log(balance.toString())       //type --> String

const num=12345.345678
console.log(num.toFixed(1));          //round off(decimals) , only positive 0 to 100
console.log(num.toPrecision(7));      //7 digits in output and last digit rounded
console.log(num.toPrecision(6));
console.log(num.toPrecision(5));
console.log(num.toPrecision(4));

const num1=1000000000;
console.log(num1.toLocaleString("en-IN"));     //comma separated value

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)


//*************************MATHS

console.log(Math.PI)
console.log(Math.abs(-4))      // convert negative to positive value and positive remains same
console.log(Math.round(67.76)); 
console.log(Math.ceil(45.67))          //46
console.log(Math.floor(45.67));        //45
console.log(Math.max(3,46,7,9,7,433));

console.log(Math.random())              //value bt 0 & 1
console.log(Math.random()*10 + 1)       // min value 1 and max 9(bcz multiply by 10 shift by 1 digit)
// math.floor to get one digit

const max=20;
const min=10;
console.log(Math.floor(Math.random()*(max-min+1)+min));

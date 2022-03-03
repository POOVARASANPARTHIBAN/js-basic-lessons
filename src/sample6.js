/* eslint-disable quotes */
/* eslint-disable semi */

const age = 100;
const money = 1000.50;
console.log(typeof age);
console.log(typeof money);

// `typeof ` is used to find out the 'type' of a variable
console.log("10" - "3");

// The above work with multiplication, division and sub
// but not with addition(+)
// because the + sign is also used for **concatenation**

// math helper method:
console.log(Math.round(2.5));
console.log(Math.floor(2.4));
console.log(Math.ceil(2.4));
console.log(Math.random());

const sweets = 20;
const kids = 3;
const eachKidGets = Math.floor(sweets / kids);
console.log(eachKidGets);
const leftsweets = sweets % kids;
console.log(leftsweets);

let x = 2 ** 3;
console.log(x);
x = Math.pow(2, 3);
console.log(x);

console.log(0.1 + 0.2);
//let costOfProduct = 100.95;
//const costOfProduct = 10095; // in paise

/* so, when working with money,
dont store them as (Rupees.paise/cents)
Store all of the money in (paise/cents)
as you wont have to deal with fractions only whole nos.
When need to display to user, just convert them back.
*/

console.log(typeof Infinity);
console.log(typeof -Infinity);
let result = 10 / 'hello';
console.log(typeof NaN);

// check the datatype of a value
let x = 100;
let result = Number.isInteger(x);
console.log(`Is x a number: ${result}`);
let y = "abcd";
result = Number.isInteger(y);
console.log(`Is y a number: ${result}`);
result = (typeof y === 'string');
console.log(`Is y a string: ${result}`);
let flag = true;
result = (typeof flaf === 'boolean');
console.log(`Is flag a boolean: ${result}`);
let nos = [1,2,3,4,5]; // Array is an object
result = (typeof nos === 'object');
console.log(`Is x an object: ${result}`);



const doc = doctorize('poovarasan')
console.log(doc)
/*
function doctorize (firstName) {
  return `Dr. ${firstName}`
}
*/

/* these are **hoisted**, meaning javascript 'hoists' or puts them at the top of the File.
 so if we try to run a function
 that is defined with the "function" keyword before it is defined (above its definition),
 then there's no error and the function is executed successfully. */

 //Anon Function
function (firstName) {
     return `Dr. ${firstName}`;
 }
 //Function Expression
 const doctorize = function (firstName) {
     return `Dr. ${firstName}`
 }
const doc = doctorize('poovarasan')
console.log(doc)
 /*These are **not hoisted**, meaning javascript doesn't put them at the top
 of the file.so if a function is not defined with the function keyworf,
 and if we try to run it before it is defined ( above its definition),
 then there's an error and the function fails to execute.*/

 //**Arrow Function**
 const inchToCM = inches => {
     console.log(inches);
     return inches * 2.54;
 };
 const resultcm = inchToCM(10)
 console.log (resultcm)

 const funcA = () => {
     console.log('hi');
 };
 funcA();

 const add = (a, b = 3) => a+ b;
 const inchTocm = (inches) => inches * 2.54;

 console.log(add(100));
 console.log(inchTocm(25));

 const makeAPerson = (first, last) => ({ name: `${first} ${last}`, age: 0});
 const person = makeAPreson('poovarasan', 'flower');
 console.log(person)

 //**IIFE ; Immediately Invokes Function Expression**
 (function(age) {
     return `You are cool and your age is ${age}`;
 })(10);
 /*Parantheses run first in javascript, so we have wqapped the function in ().
 the function immediately runs.
 the argument passed here is 10 for parameter age.*/

 /*Method:
	-A function which lives inside an object.
	-For e.g console.lo('hey') : here 'log' is the method and 'console' is the object.
	-**2 ways to define methods:**/
const employee ={
    name:'poovarasan',
    //method
    sayHi: function() {
        console.log(`Hi! ${this.name}`);
        return `Hi ${this.name}`;
    },
    //Arrow function
    print: () =>{
        console.log('Hello employee');
    },
    //short hand method
    YellHi () {
        console.log(`Hi ${this.name.toUpperCase()}`);
    }
}
employee.sayHi();
employee.print();
employee.YellHi();
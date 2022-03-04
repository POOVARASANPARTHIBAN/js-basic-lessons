/* eslint-disable no-array-constructor */
/* eslint-disable no-new-object */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
const o = new Object();
const a = new Array();
const d = new Date();
const f1 = function () {
  document.writeln('The Cow Jumped over the MOON');
};

console.log('Date = ' + d);
f1();

// ----------------------
const o1 = Object.create({ x: 100, y: 200 });
console.log('x=' + o1.x + 'y=' + o1.y);
console.log(o1);

const o2 = Object.create(null);
const o3 = Object.create(Object.prototype);
// const o3 = new Object();
// const o3 = {};
console.log(o2);
console.log(o3);

/* # prototype
JavaScript object also inherits the properties of another object,
know as its "prototype"
The methods of an object are typically inherited properties,
and this "prototypal inheritance" is a key feature of Javascript.

**dynamic-properties** can usually be added, and deleted in javascript object.
Any value in javascript that is not a string , a number, true, false, null, or underfined is an objet
and even thought string , number, and booleans are not objects, they behave like immutable object.

Property:
A property has a name and a value
A property name may be any string, including the empty string,
bit no object may have two properties with the same name
---
Every javascript object has a second javascript object associated with it.
This second object is know as a "prototype".
The object created by "new object()" inherits from "object.prototype".
The object created by "{}" also inherits from "object.prototype".

The object created by "new Array()" uses "Array.prototype"
the object created by "new Data()" uses "Data.prototype".

#object.create():
object.create() is a ststic function,
not a method invoked on individual object.
to use it, simply pass the desired prototype object:
*/
"var o1 = object.create({x:1, y:2});" // o1 has properties x and y.

var o2 = object.create(null); //o2 inherits no props or methods.
//You can pass **null** to create a new object that does not have a
//prototype.

/* eslint-disable semi */
function getChild (parent) {
  // if (parent == null) throw TypeError();
  return Object.create(parent);
}

let o4 = { x: "don't change this value" };
console.log(o4.x);
let p = getChild(o4);
console.log(p);

o4 = null;
p = getChild(o4); // Object.create(null);
console.log(p);
Object.prototype = 0; // (zero)
console.log(Object);
/* The prototype properties of built-in are read-only.
Object.prototype unchange */

const o5 = {};
// console.log(o5);
o5.x = 100;
console.log(o5);
p = getChild(o5);
console.log(p);
p.y = 200;
const q = getChild(p);
q.z = 300;
console.log(q);
console.log('q.x + q.y + q.z' + (q.x + q.y + q.z));
console.log('p.x + p.y + p.z ' + (p.x + p.y));
console.log('o5.x + o5.y ' + (o5.x + o5.y));
console.log('o5.x' + o5.x);

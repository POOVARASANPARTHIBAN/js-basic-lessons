/* eslint-disable semi */
const person = {
  first: 'Flower',
  last: 'King',
  age: 100
};
console.log(person.first);
console.log(person.last);
console.log(person.age);
person.first = 'Tom';
person.last = 'jerry';
console.log(person.first);
console.log(person.last);
person.last = null;
console.log(person.last);

const empty = {};
console.log(empty);
const point1 = { x: 10, y: 50 };
console.log(point1.x);
console.log(point1.y);
const point2 = { x: point1.x, y: point1.y + 1 };
console.log(point2.x);
console.log(point2.y);
const book = {
  'main title': 'Java script', // property names include spaces
  'sub-title': 'Guid to Java script for beginners',
  for: 'students', // reserved key word
  author: {
    first: 'Flower',
    last: 'King'
  }
};
console.log(book['main title']);
console.log(book['sub-title']);
console.log(book.for);
console.log(book.author.first);
console.log(book.author.last);
// console.log(book.sub - title);
console.log(book.for);

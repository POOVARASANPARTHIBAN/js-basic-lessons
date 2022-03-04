/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
/* eslint-disable no-undef-init */
/* eslint-disable semi */
const book = {
  'main title': 'JavaScript',
  subtitle: 'The Definitive Guide',
  for: 'all audience',
  author: {
    firstname: 'Donald',
    surname: 'DUck'
  }
}
let len = undefined;
/* book = null;
if (book) {
  if (book.subtitle) {
    len = book.subtitle.length;
    console.log(len);
  } else  console.log('book.subtitle undefined:');
} else  console.log('book is null');
*/

len = book && book.subtitle && book.subtitle.length;
if (len) console.log(len);

console.log(book.author);
delete book.author;
console.log(book.author);

console.log(book['main title']);
delete book['main title'];
console.log(book['main title']);

const o6 = { x: 100 };
console.log(o6.x);
delete o6.x;
console.log(o6.x);
console.log(o6.toString);
delete o6.toString;

// can not delete
delete Object.prototype;
var a = 1;
delete this.a;
function f1 () {}
delete this.f1();

/* eslint-disable semi */
const myname = 'NamefieldEmpty'; // sinle quote
const middle = 'Poo'; // double quote
const last = 'singh'; // back tick

console.log(myname);
console.log(middle);
console.log(last);

const sentencel = 'shes\'s so cool'
console.log(sentencel);
const sentence2 = "she's so cool"
console.log(sentence2);
const sentence3 = '\'she\'s so cool\'';
console.log(sentence3);
const sentence4 = "she's so \"cool\"";
console.log(sentence4);

const song1 = `I Like
        ARR songs add 
        Aniruth songs`;
console.log(song1);

const hello3 = 'hello my name is' + myname + '.Nice to meet you';
console.log(hello3);

const hello4 = `hello my name is ${myname}.Nice to meet you.I am ${1 + 100} years olg`
console.log(hello4);

const html = `<div>
                <h2>${myname}</h2>
                <p>${hello3}</p>
                </div>`;
console.log(html);
document.body.innerHTML = html;

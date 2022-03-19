/* eslint-disable no-unused-vars */
/* eslint-disable semi */

// closer

function createGreeting (greeting = '') {
  const myGreet = greeting.toLocaleUpperCase();
  return function (name) {
    return `${myGreet} ${name}`;
  }
}
const disply = createGreeting('Mr.');
console.log(disply('Poovarasan'));

const sayHello = createGreeting('Hello');
const sayVanakkam = createGreeting('Vanakkam');
console.log(sayHello('Flower'));
console.log(sayVanakkam('King'));
console.log(sayVanakkam('Flower'));

//= =========
function createGame (gameName) {
  let score = 0;
  return function win () {
    score++;
    return `Your name ${gameName} score is ${score}`;
  }
}
const game = createGame('FreeFire');
console.log(game());

const hockeyGame = createGame('hockey');
const soccerGame = createGame('soccer');
hockeyGame();
hockeyGame();
hockeyGame();
soccerGame();

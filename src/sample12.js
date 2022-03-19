/* eslint-disable semi */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const maxvalue = Math.max(10, 12, 35, 60, 2, 55)
console.log(maxvalue);

const minvalue = Math.min(10, 12, 35, 60, 2, 55)
console.log(minvalue);

const floatValue = parseFloat('2.032565')
console.log(floatValue)

let intValue = parseInt('2356abcd')
console.log(intValue)

intValue = parseInt('abcd2356')
console.log(intValue)

const today = Date.now()
console.log(today)
// return no. of milliseconds since January 1, 1970 00:00:00 UTC

function calculateBill (billAmount, taxRate) {
  console.log(billAmount + ' - ' + taxRate);

  function calculateBill (billAmount, taxRate) {
    console.log(billAmount + ' - ' + taxRate);
    const total = billAmount + billAmount * taxRate
    return total;
  }
}

calculateBill(100, 0.13);
// here 100, 0.13 are argument

const billtotal = calculateBill(20 + 10 + 50, 0.75)
console.log(billtotal)

// ---------

// default value for the parameter
function yell (name = 'Flower King') {
  return `HEY ${name.toUpperCase()}`
}
const greetings = yell('poovarasan') // HEY POOVARASAN
console.log(greetings);
greetinds = yell() // HEY FLOWER KING
console.log(greetinds);

// Above, if we don't pass any argument to yell function,then it takes the default value in function definition,
// here flower king,else it takes whatever we pass as argument

function calculateBill1 (billAmount, taxRate = 0.13, tipRate = 0.15) {
  console.log('Running Calculate Bill!!')
  console.log('billAmount:' + billAmount + ' taxRate: ' + taxRate + ' tipRate:' + tipRate)
  const total = billAmount + billAmount * taxRate + billAmount * tipRate
  return total
}

calculateBill1(100)

calculateBill1(100, 0.66)

// Suppose above we want to pass the tipRate but not the taxRate and want taxRate to be default,
// then the only thing we can do is:

calculateBill1(100, undefined, 0.66)

// here the taxRate will default to 0.13 as
// we have passed undefined to it and the tipRate will be 0.66 as passed

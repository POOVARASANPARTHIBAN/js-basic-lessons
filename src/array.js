const names = ['Suresh', 'Surya', 'Vijay'];

console.log(names[0]);
console.log(names.length);
console.log(names[names.length - 1]);

// methods of Array

names.push('Sri');
console.log('After push: ' + names);

//push will add the item at the end

//...is calles as the spread operator
//it represent theentire items in the array

const names2 = [...name, 'Raj'];
console.log('names2: ' + names2);

names .unshift('poppy');
console.log('unshift:' + names);
//its adds data to the beginning 
//so the index no of the res of the values will change now

const names3 = ['raj', ...names];
console.log(names3);
//this will add data at the beginning
//now next method slice()

//create a new array
 const bikes = ['bianchi', 'miele', 'panasonic', 'miyata', 'RE'];
 const b1 = [...bikes.slice(0,2)];
 console.log(b1);
 //slice takes 2 parameters
 //from , to
 //it has copied 2 values from index 0 and assigned to b1

 const b2 = [...bikes.slice(3)];
 console.log(b2);

 const newBikes = [
     ...bikes.slice(0, 2),
     'benotto',
     ...bikes.slice(2)
 ];
 console.log('newBikes: ' + newBikes);

 //now next method slice()
 const bikes1 = ['bianchi', 'miele', 'panasonic', 'miyata', 'RE'];
 const b3 = [...bikes.slice(0,2)];
 console.log(b3);

 const newBikes2 = [
     ...newBikes.slice(0, 3),
     ...newBikes.slice(4)
 ];
 console.log('newBikes2: ' + newBikes2);

 const indexOfSam = names.findIndex(name => name === 'Surya');
 console.log('IndexOfSAM: ' + indexOfSam);

function deleteName(nametodelete, names) {
    const indexOfname = names.findIndex(n => n === nametodelete);
    console.log('indexOf name to delete: ' + indexOfname);
    const newArray =[
        ...names.slice(0, indexOfname),
        ...names.slice(indexOfname+1)
    ];
    return newArray;
};
const deleteNames = deleteName('Suresh', names);
console.log(deleteNames);
console.log(names);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// numbers.reverse();
// console.log(numbers);
const numbersReversed = [...numbers].reverse();
console.log(numbersReversed);

/*
console.log(numbers);
numbers.splice(3, 2); // from the 3rd index delete tha name 2 values
console.log(numbers); 
const pizzaSlice = numbers.slice(2, 4);
console.log('pizzaSlices: ' + pizzaSlice);
console.log('Original Numbers: ' + numbers);
*/

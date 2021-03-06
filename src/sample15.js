/* eslint-disable no-const-assign */
/* eslint-disable no-undef */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* the ability to access the outer level scoped data from the inner level
scoped code even after the function is terminated */
function doSomeTask () {
  const x = 100
  const y = 20
  console.log('x: ' + x + ' y: ' + y)
}
doSomeTask()
console.log('completed')

function outer () {
  const outerVar = 'Hey I am the outer Var!';
  // console.log(outerVar);
  function inner () {
    const innerVar = 'Hey I am an inner var!';
    console.log(innerVar);
    console.log(outerVar); // closure - captured variable
  }
  // console.log(innerVar);   //Uncaught ReferenceError: innerVar is not defined
  // inner();     // call to inner() from outer()
  return inner;
}
// outer();
// outer.inner();
const innerFunc = outer();
innerFunc();
innerFunc = null;

/*
Challenge 1
Create a function createFunction that creates and returns a function.
 When that created function is called, it should print "hello". When you think you completed createFunction, un-comment out those lines in the code and run it to see if it works.
*/

function createFunction() {
  return () => {
    console.log("hello");
  };
}

const function1 = createFunction();
function1(); // => should console.log('hello');

/*
Challenge 2
Create a function createFunctionPrinter that accepts one input and returns a function. When that created function is called, it should print out the input that was used when the function was created.
*/

function createFunctionPrinter(input) {
  return () => {
    console.log(input);
  };
}
const printSample = createFunctionPrinter("sample");
printSample(); // => should console.log('sample');
const printHello = createFunctionPrinter("hello");
printHello(); // => should console.log('hello');

/*
Challenge 3
create a function addByX that returns a function that will add an input by x.
*/

function addByX(x) {
  return (n) => x + n;
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
console.log(addByTwo(1)); // => should return 3
console.log(addByTwo(2)); // => should return 4
console.log(addByTwo(3)); // => should return 5

const addByThree = addByX(3);
addByThree(1); // => should return 4
addByThree(2); // => should return 5

const addByFour = addByX(4);
addByFour(4); // => should return 8
addByFour(5); // => should return 9

/*
Challenge 4
Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time, it should call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.
*/

// CHALLENGE 4
function once(func) {
  let isEverRun = false;
  let reslut = null;
  return (v) => {
    if (isEverRun) return reslut;
    isEverRun = true;
    return (reslut = func(v));
  };
}

// /*** Uncomment these to check your work! ***/
const onceFunc = once(addByTwo);
console.log(onceFunc(4)); // => should log 6
console.log(onceFunc(10)); // => should log 6
console.log(onceFunc(9001)); // => should log 6

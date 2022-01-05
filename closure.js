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

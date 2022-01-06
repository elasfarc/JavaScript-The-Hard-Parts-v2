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

/*
Challenge 5
Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter.
*/
function after(count, func) {
  let numberOfRunning = 0;
  return () => {
    if (++numberOfRunning < count) return;
    return func();
  };
}

// /*** Uncomment these to check your work! ***/
const called = function () {
  console.log("hello");
};
const afterCalled = after(3, called);
afterCalled(); // => nothing is printed
afterCalled(); // => nothing is printed
afterCalled(); // => 'hello' is printed

/*
Challenge 6
Write a function delay that accepts a callback as the first parameter and the wait in milliseconds before allowing the callback to be invoked as the second parameter. Any additional arguments after wait are provided to func when it is invoked. HINT: research setTimeout();
*/

function delay(func, wait, ...args) {
  setTimeout(func, wait, ...args);
}

// delay(
//   (x, y) => {
//     console.log(x + y);
//   },
//   5000,
//   10,
//   20
// );

/*
Challenge 7
Write a function rollCall that accepts an array of names and returns a function.
 The first time the returned function is invoked, it should log the first name to the console.
  The second time it is invoked, it should log the second name to the console, and so on, until all names have been called.
   Once all names have been called, it should log 'Everyone accounted for'.
*/

function rollCall(names) {
  let index = 0;
  return () => {
    if (index >= names.length) {
      console.log("Everyone accounted for");
      return;
    }
    console.log(names[index++]);
  };
}

// /*** Uncomment these to check your work! ***/
const rollCaller = rollCall(["Victoria", "Juan", "Ruth"]);
rollCaller(); // => should log 'Victoria'
rollCaller(); // => should log 'Juan'
rollCaller(); // => should log 'Ruth'
rollCaller(); // => should log 'Everyone accounted for'

/*
Challenge 8
Create a function saveOutput that accepts a function (that will accept one argument), and a string (that will act as a password). saveOutput will then return a function that behaves exactly like the passed-in function, except for when the password string is passed in as an argument. When this happens, the returned function will return an object with all previously passed-in arguments as keys, and the corresponding outputs as values.
*/

function saveOutput(func, magicWord) {
  const storage = {};
  return (input) =>
    input === magicWord ? storage : (storage[input] = func(input));
}

// /*** Uncomment these to check your work! ***/
const multiplyBy2 = function (num) {
  return num * 2;
};
const multBy2AndLog = saveOutput(multiplyBy2, "boo");
console.log(multBy2AndLog(2)); // => should log 4
console.log(multBy2AndLog(9)); // => should log 18
console.log(multBy2AndLog("boo")); // => should log { 2: 4, 9: 18 }

/*
Challenge 9
Create a function cycleIterator that accepts an array, and returns a function. The returned function will accept zero arguments. When first invoked, the returned function will return the first element of the array. When invoked a second time, the returned function will return the second element of the array, and so forth. After returning the last element of the array, the next invocation will return the first element of the array again, and continue on with the second after that, and so forth.
*/

function cycleIterator(array) {
  let index = 0;
  return () =>
    index >= array.length ? ((index = 0), array[index++]) : array[index++];
}

// /*** Uncomment these to check your work! ***/
const threeDayWeekend = ["Fri", "Sat", "Sun"];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // => should log 'Fri'
console.log(getDay()); // => should log 'Sat'
console.log(getDay()); // => should log 'Sun'
console.log(getDay()); // => should log 'Fri'

/*
Challenge 10
Create a function defineFirstArg that accepts a function and an argument.
 Also, the function being passed in will accept at least one argument.
  defineFirstArg will return a new function that invokes the passed-in function with the passed-in argument as the passed-in function's first argument.
   Additional arguments needed by the passed-in function will need to be passed into the returned function.
*/

function defineFirstArg(func, arg) {
  return (...args) => func(arg, ...args);
}

// /*** Uncomment these to check your work! ***/
const subtract = function (big, small) {
  return big - small;
};
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // => should log 15

/*
Challenge 11
Create a function dateStamp that accepts a function and returns a function.
 The returned function will accept however many arguments the passed-in function accepts,
  and return an object with a date key that contains a timestamp with the time of invocation,
   and an output key that contains the result from invoking the passed-in function.
    HINT: You may need to research how to access information on Date objects.
*/

function dateStamp(func) {
  return (...args) => ({
    date: new Date().toDateString(),
    output: func(...args),
  });
}

// /*** Uncomment these to check your work! ***/
const stampedMultBy2 = dateStamp((n) => n * 2);
console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }

/*
Challenge 12
Create a function censor that accepts no arguments.
censor will return a function that will accept either two strings, or one string.
When two strings are given, the returned function will hold onto the two strings as a pair, for future use.
When one string is given, the returned function will return the same string, except all instances of first strings (of saved pairs) will be replaced with their corresponding second strings (of those saved pairs).
*/

function censor() {
  const pairs = {};
  return (str1, str2) => {
    if (str2) {
      pairs[str1] = str2;
      pairs[str2] = str1;
      return;
    }
    return str1.split(" ").reduce((memo, word) => {
      const regex = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g;
      const punctuationFree = word.replace(regex, "");
      const punctuationMark = word.replace(punctuationFree, "");

      return Object.keys(pairs).includes(punctuationFree)
        ? `${memo} ${pairs[punctuationFree]}${punctuationMark}`
        : `${memo} ${word}`;
    }, "");
  };
}

// /*** Uncomment these to check your work! ***/
const changeScene = censor();
changeScene("dogs", "cats");
changeScene("quick", "slow");
console.log(changeScene("The quick, brown fox jumps over the lazy dogs."));
// => should log 'The slow, brown fox jumps over the lazy cats.'

/*
Challenge 13
There's no such thing as private properties on a JavaScript object! But, maybe there are? Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods. getSecret() which returns the secret setSecret() which sets the secret
*/

function createSecretHolder(secret) {
  return {
    getSecret() {
      return secret;
    },
    setSecret(newSecret) {
      secret = newSecret;
    },
  };
}

// /*** Uncomment these to check your work! ***/
obj = createSecretHolder(5);
console.log(obj.getSecret()); // => returns 5
obj.setSecret(2);
console.log(obj.getSecret()); // => returns 2

/*
Challenge 14
Write a function, callTimes, that returns a new function. The new function should return the number of times it’s been called.
*/

function callTimes() {
  let counter = 0;
  return () => ++counter;
}

// /*** Uncomment these to check your work! ***/
let myNewFunc1 = callTimes();
let myNewFunc2 = callTimes();
console.log(myNewFunc1()); // => 1
console.log(myNewFunc1()); // => 2
console.log(myNewFunc2()); // => 1
console.log(myNewFunc2()); // => 2

/*
Challenge 15
Create a function russianRoulette that accepts a number (let us call it n), and returns a function. The returned function will take no arguments, and will return the string 'click' the first n - 1 number of times it is invoked. On the very next invocation (the nth invocation), the returned function will return the string 'bang'. On every invocation after that, the returned function returns the string 'reload to play again'.
*/
// CHALLENGE 15
function russianRoulette(num) {
  const game = {
    counter: 0,
    onBeforeCounter: "click",
    onCounter: "bang",
    onAfterConter: "reload to play again",
  };
  return () => {
    game.counter++;
    return game.counter > num
      ? game.onAfterConter
      : game.counter < num
      ? game.onBeforeCounter
      : game.onCounter;
  };
}

// /*** Uncomment these to check your work! ***/
const play = russianRoulette(3);
console.log(play()); // => should log 'click'
console.log(play()); // => should log 'click'
console.log(play()); // => should log 'bang'
console.log(play()); // => should log 'reload to play again'
console.log(play()); // => should log 'reload to play again'

/*
Challenge 16
Create a function average that accepts no arguments, and returns a function (that will accept either a number as its lone argument, or no arguments at all). When the returned function is invoked with a number, the output should be average of all the numbers have ever been passed into that function (duplicate numbers count just like any other number). When the returned function is invoked with no arguments, the current average is outputted. If the returned function is invoked with no arguments before any numbers are passed in, then it should return 0.
*/
function average() {
  numbers = [];
  return (number) => {
    if (number) numbers.push(number);
    return numbers.length === 0
      ? 0
      : numbers.reduce((sum, n) => sum + n, 0) / numbers.length;
  };
}

// /*** Uncomment these to check your work! ***/
const avgSoFar = average();
console.log(avgSoFar()); // => should log 0
console.log(avgSoFar(4)); // => should log 4
console.log(avgSoFar(8)); // => should log 6
console.log(avgSoFar()); // => should log 6
console.log(avgSoFar(12)); // => should log 8
console.log(avgSoFar()); // => should log 8

/*
Challenge 17
Create a function makeFuncTester that accepts an array (of two-element sub-arrays), and returns a function (that will accept a callback). The returned function should return true if the first elements (of each sub-array) being passed into the callback all yield the corresponding second elements (of the same sub-array). Otherwise, the returned function should return false.
*/
function makeFuncTester(arrOfTests) {
  return (callback) =>
    arrOfTests
      .map((pair) => pair[1] === callback(pair[0]))
      .every((boolean) => boolean);
}

// /*** Uncomment these to check your work! ***/
const capLastTestCases = [];
capLastTestCases.push(["hello", "hellO"]);
capLastTestCases.push(["goodbye", "goodbyE"]);
capLastTestCases.push(["howdy", "howdY"]);
const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
const capLastAttempt1 = (str) => str.toUpperCase();
const capLastAttempt2 = (str) => str.slice(0, -1) + str.slice(-1).toUpperCase();
console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true

/*
Challenge 2
Create a function delayedGreet that console logs welcome after 3 seconds.
*/

function delayedGreet() {
  setTimeout(function () {
    console.log("Welcome");
  }, 3000);
}

// delayedGreet();

/*
Challenge 3
Create a function helloGoodbye that console logs hello right away, and good bye after 2 seconds.
*/

function helloGoodbye() {
  console.log("hello");
  setTimeout(function () {
    console.log("good bye");
  }, 2000);
}

// helloGoodbye();

/*
Challenge 4
Create a function brokenRecord that console logs hi again every second. Use the End Code button to stop the console logs when you are satisfied that it is working.
*/

function brokenRecord() {
  setInterval(() => {
    console.log("hi");
  }, 1000);
}

// brokenRecord();

/*
Challenge 5
Create a function limitedRepeat that console logs hi for now every second, but only for 5 seconds. Research how to use clearInterval if you are not sure how to do this.
*/

function limitedRepeat() {
  const intervalID = setInterval(() => {
    console.log("hi for now");
  }, 1000);
  setTimeout(() => clearInterval(intervalID), 6000);
}

// limitedRepeat();

/*
Challenge 6
Write a function called everyXsecsForYsecs that will accept three arguments: a function func, a number interval, and another number duration.

everyXsecsForYsecs will execute the given function every interval number of milliseconds, but then automatically stop after duration milliseconds.
*/

function everyXsecsForYsecs(func, interval, duration) {
  const intervalID = setInterval(func, interval * 1000);
  setTimeout(() => clearInterval(intervalID), duration * 1000);
  func();
}
// Uncomment the following lines to check your work!
function theEnd() {
  console.log("This is the end!");
}
// everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!

/*
Challenge 7
Write a function delayCounter that accepts a number (called 'target') as the first argument and a number of milliseconds (called 'wait') as the second argument, and returns a function.

When the returned function is invoked, it should log to the console all of the numbers between 1 and the target number, spaced apart by 'wait' milliseconds.
*/

function delayCounter(target, wait) {
  return () => {
    let counter = 0;
    const id = setInterval(() => {
      console.log(++counter);
      if (counter >= target) clearInterval(id);
    }, wait);
  };
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const countLogger = delayCounter(3, 1000);
// countLogger();
// After 1 second, log 1
// After 2 seconds, log 2
// After 3 seconds, log 3

/*
Challenge 8
Write a function, promised, that takes in a value. This function will return a promise that will resolve after 2 seconds.

Hint: take a look at the Promise object docs on MDN.
*/

function promised(val) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(val), 2000);
  });
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const createPromise = promised("wait for it...");
// createPromise.then((val) => console.log(val));
// will log "wait for it..." to the console after 2 seconds

/*
Challenge 9
Write a SecondClock class, with two methods: start and reset.​
start: upon invocation, invokes a callback (this.cb, defined in the constructor) on an argument every second, with the argument to the callback being the current seconds "value".

In other words, the callback gets invoked every second on the "seconds hand" of the clock. Always start with 1 and don't utilize the seconds value of the current computer clock time.

The first "tick" with value 1 occurs 1 second after the initial "secondClock" invocation.
The second "tick" with value 2 occurs 2 seconds after the initial "secondClock" invocation.
...
The sixtieth "tick" with value 60 occurs 60 seconds after the initial "secondClock" invocation.
The sixty-first "tick" with value 1 occurs 61 seconds after the initial "secondClock" invocation.
The sixty-second "tick" with value 2 occurs 62 seconds after the initial "secondClock" invocation.
etc.
reset: upon invocation, completely stops the "clock".
Also resets the time back to the beginning.
​
Hint: look up setInterval and clearInterval.


*/

class SecondClock {
  constructor(cb) {
    this.cb = cb;
    this.seconds = 0;
  }
  start() {
    this.id = setInterval(() => {
      //this.seconds = this.seconds > 60 ? 1 : ++this.seconds;
      this.seconds++;
      this.cb(this.seconds % 60);
    }, 1000);
  }
  reset() {
    this.seconds = 0;
    clearInterval(this.id);
  }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const clock = new SecondClock((val) => {
  console.log(val);
});
console.log("Started Clock.");
clock.start();
setTimeout(() => {
  clock.reset();
  console.log("Stopped Clock after 6 seconds.");
}, 6000);

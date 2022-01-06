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
everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!
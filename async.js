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

helloGoodbye();

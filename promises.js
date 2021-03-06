/*
Challenge 1
Let's start by reviewing asynchronous functions! Using setTimeout, print the string 'Hello!' after 1000ms.
*/

const sayHello = () => setTimeout(() => console.log("Hello"), 1000);

// sayHello();

/*
Challenge 2
Create a promise. Have it resolve with a value of 'Resolved!' in resolve after a delay of 1000ms, using setTimeout. Print the contents of the promise after it has been resolved by passing console.log to .then
*/

const promise = new Promise((resolve) =>
  setTimeout(() => resolve("Resolved"), 1000)
);

promise.then((v) => console.log(v));

/*
Challenge 3
Create another promise. Now have it reject with a value of "Rejected!" without using setTimeout. Print the contents of the promise after it has been rejected by passing console.log to .catch
*/

const rejectedPromise = new Promise((resolve, reject) => reject("Rejected"));
rejectedPromise.catch((err) => console.log(err));

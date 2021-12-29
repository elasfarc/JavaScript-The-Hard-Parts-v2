/*
Challenge 1
Create a function addTwo that accepts one input and adds 2 to it.
*/

function addTwo(input) {
  return input + 2;
}

/*
Challenge 2
Create a function addS that accepts one input and adds an "s" to it.
*/

function addS(input) {
  return input + "s";
}

/*
Challenge 3
Create a function called map that takes two inputs:
an array of numbers (a list of numbers)
a 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.
map([1,2,3,4,5], multiplyByTwo); //-> [2,4,6,8,10]
multiplyByTwo(1); //-> 2
multiplyByTwo(2); //-> 4
  
*/

function myMap(list, callbackFn) {
  const mappedList = [];
  if (Array.isArray(list)) {
    for (let element of list) {
      mappedList.push(callbackFn(element));
    }
    return mappedList;
  } else {
    console.error("list is not an array");
  }
}

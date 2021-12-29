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

/*
Challenge 4
Create a function called forEach that takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything.
let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];
forEach(letters, function(char) {
  alphabet += char;
});
console.log(alphabet);   //prints 'abcd'
*/

function myForEach(array, callbackFn) {
  for (let element of array) {
    callbackFn(element);
  }
}

/*
Challenge 5
In challenge 3, you've created a function called map. In this challenge, you're going to rebuild the map function by creating a function called mapWith. This time you're going to use forEach inside of mapWith instead of using a for loop.
*/

function mapWith(list, callbackFn) {
  const mappedList = [];
  myForEach(list, (element) => {
    mappedList.push(callbackFn(element));
  });
  return mappedList;
}

/*
Challenge 6
Create a function called reduce that takes an array and reduces the elements to a single value. For example it can sum all the numbers, multiply them, or any operation that you can put into a function.
const nums = [4, 1, 3];
const add = function(a, b) { return a + b; }
reduce(nums, add, 0);   //-> 8
Here's how it works. The function has an "accumulator value" which starts as the initialValue and accumulates the output of each loop. The array is iterated over, passing the accumulator and the next array element as arguments to the callback. The callback's return value becomes the new accumulator value. The next loop executes with this new accumulator value. In the example above, the accumulator begins at 0. add(0,4) is called. The accumulator's value is now 4. Then add(4, 1) to make it 5. Finally add(5, 3) brings it to 8, which is returned.
*/

function myreduce(array, callback, initial) {
  let memo = initial;
  for (let i = 0; i < array.length; i++) {
    if (i === 0 && !memo) memo = array[i];
    else memo = callback(memo, array[i], i);
  }
  return memo;
}

let x = myreduce([1, 7, 3], (acc, ele) => acc + ele); //11
let y = myreduce([1, 7, 3], (acc, ele) => acc + ele, 10); //21
//console.log(x, y);

/*
Challenge 7
Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS: Use reduce!
*/

function intersection(...arrays) {
  if (arrays.length === 0) return arrays;
  return myreduce(
    arrays,
    (acc, arr, i) => {
      if (i === 0) return arr;
      const intersection = [];
      acc.forEach((accEle) => {
        if (arr.some((ele) => accEle === ele)) {
          intersection.push(accEle);
        }
      });
      return intersection;
    },
    []
  );
}

console.log(
  intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20])
); // should log: [5, 15]

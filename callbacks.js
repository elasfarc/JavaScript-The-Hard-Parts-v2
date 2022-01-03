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

/*
Challenge 8
Construct a function union that compares input arrays and returns a new array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array. BONUS: Use reduce!
*/

function union(...arrays) {
  if (arrays.length === 0) return arrays;
  return myreduce(
    arrays,
    (acc, arr, i) => {
      if (i === 0) return arr;
      const union = acc;
      arr.forEach((ele) => {
        if (!acc.some((accEle) => ele === accEle)) union.push(ele);
      });
      return union;
    },
    []
  );
}

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

/*
Challenge 9
Construct a function objOfMatches that accepts two arrays and a callback.
 objOfMatches will build an object and return it.
  To build the object, objOfMatches will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array.
   If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value.
*/

function objOfMatches(arr1, arr2, cb) {
  const matches = {};
  arr1.forEach((ele, i) => {
    if (cb(ele) === arr2[i]) matches[ele] = arr2[i];
  });
  return matches;
}
console.log(
  objOfMatches(
    ["hi", "howdy", "bye", "later", "hello"],
    ["HI", "Howdy", "BYE", "LATER", "hello"],
    function (str) {
      return str.toUpperCase();
    }
  )
);
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

/*
Challenge 10
Construct a function multiMap that will accept two arrays: an array of values and an array of callbacks.
 multiMap will return an object whose keys match the elements in the array of values.
  The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.
*/

function multiMap(values, callbackArr) {
  const storage = {};
  values.forEach((v) => {
    storage[v] = callbackArr.map((cb) => cb(v));
  });
  return storage;
}

console.log(
  multiMap(
    ["catfood", "glue", "beer"],
    [
      function (str) {
        return str.toUpperCase();
      },
      function (str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
      },
      function (str) {
        return str + str;
      },
    ]
  )
);
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

/*
Challenge 11
Construct a function objectFilter that accepts an object as the first parameter and a callback function as the second parameter.
 objectFilter will return a new object. The new object will contain only the properties from the input object such that the property's value is equal to the property's key passed into the callback.
*/

function objectFilter(obj, cb) {
  const storage = {};
  Object.entries(obj).forEach((entry) => {
    if (entry[1] === cb(entry[0])) storage[entry[0]] = entry[1];
  });
  return storage;
}

const cities = {
  London: "LONDON",
  LA: "Los Angeles",
  Paris: "PARIS",
};
console.log(objectFilter(cities, (city) => city.toUpperCase()));
// Should log { London: 'LONDON', Paris: 'PARIS'}

/*
Challenge 12
Create a function majority that accepts an array and a callback. The callback will return either true or false. majority will iterate through the array and perform the callback on each element until it can be determined if the majority of the return values from the callback are true. If the number of true returns is equal to the number of false returns, majority should return false.
*/

function majority(arr, cb) {
  let trues = 0;
  arr.forEach((ele) => {
    if (cb(ele)) trues++;
  });
  return trues > arr.length - trues ? true : false;
}

const isOdd = function (num) {
  return num % 2 === 1;
};
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false

/*
Challenge 13
Create a function prioritize that accepts an array and a callback. The callback will return either true or false. prioritize will iterate through the array and perform the callback on each element, and return a new array, where all the elements that yielded a return value of true come first in the array, and the rest of the elements come second.
*/

function prioritize(arr, cb) {
  return union(
    arr.filter((ele) => cb(ele)),
    arr
  );
}
const startsWithS = function (str) {
  return str[0] === "s" || str[0] === "S";
};
console.log(
  prioritize(
    ["curb", "rickandmorty", "seinfeld", "sunny", "friends"],
    startsWithS
  )
);
// should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']

/*
Challenge 14
Create a function countBy that accepts an array and a callback, and returns an object. countBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. The value associated with each key will be the number of times that particular return value was returned.
*/

function countBy(arr, cb) {
  return arr.reduce((acc, element) => {
    acc[cb(element)] = Boolean(acc[cb(element)]) ? ++acc[cb(element)] : 1;
    return acc;
  }, {});
}

// /*** Uncomment these to check your work! ***/
console.log(
  countBy([1, 2, 3, 4, 5], function (num) {
    if (num % 2 === 0) return "even";
    else return "odd";
  })
); // should log: { odd: 3, even: 2 }

/*
Challenge 15
Create a function groupBy that accepts an array and a callback, and returns an object. groupBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. The value associated with each key will be an array consisting of all the elements that resulted in that return value when passed into the callback.
*/

function groupBy(array, callback) {
  return array.reduce((acc, element) => {
    (acc[callback(element)] || (acc[callback(element)] = [])).push(element);
    return acc;
  }, {});
}

const decimals = [1.3, 2.1, 2.4];
const floored = function (num) {
  return Math.floor(num);
};
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

/*
Challenge 16
Create a function goodKeys that accepts an object and a callback. The callback will return either true or false. goodKeys will iterate through the object and perform the callback on each value. goodKeys will then return an array consisting only the keys whose associated values yielded a true return value from the callback.
*/
function goodKeys(obj, callback) {
  return Object.keys(obj).filter((key) => callback(obj[key]));
}

const sunny = {
  mac: "priest",
  dennis: "calculating",
  charlie: "birdlaw",
  dee: "bird",
  frank: "warthog",
};
const startsWithBird = function (str) {
  return str.slice(0, 4).toLowerCase() === "bird";
};
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']

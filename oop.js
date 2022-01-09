/*
Working with Object Literals
Challenge 1
Create a function that has two parameters (name and age) and returns an object. Let's call this function makePerson. This function will:
Create an empty object
Add a name property to the newly created object with its value being the 'name' argument passed into the function
Add an age property to the newly created object with its value being the 'age' argument passed into the function
Return the object
*/

function makePerson(name, age) {
  const person = {};
  person.name = name;
  person.age = age;
  return person;
}

const vicky = makePerson("Vicky", 24);

// /********* Uncomment these lines to test your work! *********/
// console.log(vicky.name); // -> Logs 'Vicky'
// console.log(vicky.age); // -> Logs 24

/*
Using Object.create
Challenge 2
Inside personStore object, create a property greet where the value is a function that logs "hello".
Challenge 3
Create a function personFromPersonStore that takes as input a name and an age. When called, the function will create person objects using the Object.create method on the personStore object.
Challenge 4
Without editing the code you've already written, add an introduce method to the personStore object that logs "Hi, my name is [name]".
*/

const personStore = {
  greet() {
    console.log("Hello");
  },
};

function personFromPersonStore(name, age) {
  const person = Object.create(personStore);
  person.name = name;
  person.age = age;
  return person;
}

personStore.introduce = function () {
  console.log("Hi, my name is " + this.name);
};

/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/

// /********* Uncomment this line to test your work! *********/
personStore.greet(); // -> Logs 'hello'

const sandra = personFromPersonStore("Sandra", 26);

console.log(sandra.name); // -> Logs 'Sandra'
console.log(sandra.age); //-> Logs 26
sandra.greet(); //-> Logs 'hello'

sandra.introduce(); // -> Logs 'Hi, my name is Sandra'

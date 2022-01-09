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

/*
/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************
Using the NEW keyword
Challenge 5
Create a function PersonConstructor that uses the this keyword to save a single property onto its scope called greet. greet should be a function that logs the string 'hello'.
Challenge 6
Create a function personFromConstructor that takes as input a name and an age. When called, the function will create person objects using the new keyword instead of the Object.create method.
Challenge 7
Without editing the code you've already written, add an introduce method to the PersonConstructor function that logs "Hi, my name is [name]".

*/

function PersonConstructor() {
  this.greet = function () {
    console.log("hello");
  };
}

function personFromConstructor(name, age) {
  const person = new PersonConstructor();
  person.name = name;
  person.age = age;
  return person;
}

PersonConstructor.prototype.introduce = function () {
  console.log("Hi, my name is " + this.name);
};

// /********* Uncomment these lines to test your work! *********/
const simon = new PersonConstructor();
simon.greet(); // -> Logs 'hello'
const mike = personFromConstructor("Mike", 30);

console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); //-> Logs 30
mike.greet(); //-> Logs 'hello'

mike.introduce(); // -> Logs 'Hi, my name is Mike'

/*
Using ES6 Classes
Challenge 8
Create a class PersonClass. PersonClass should have a constructor that is passed an input of name and saves it to a property by the same name. PersonClass should also have a method called greet that logs the string 'hello'.
Challenge 9
Create a class DeveloperClass that creates objects by extending the PersonClass class. In addition to having a name property and greet method, DeveloperClass should have an introduce method. When called, introduce should log the string 'Hello World, my name is [name]'.

*/

class PersonClass {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log("hello");
  }
}

class DeveloperClass extends PersonClass {
  introduce() {
    console.log("Hello World, my name is " + this.name);
  }
}

// /********* Uncomment these lines to test your work! *********/
const george = new PersonClass();
george.greet(); // -> Logs 'hello'

const thai = new DeveloperClass("Thai", 32);
console.log(thai.name); // -> Logs 'Thai'
thai.introduce(); //-> Logs 'Hello World, my name is Thai'

/*
EXTENSION: Subclassing
Classes in JavaScript can also inherit properties from other classes - this phenomena is known as subclassing. If you've finished all the main challenges, we encourage you to do some research on this concept and complete the challenges below!
Challenge 10
Create an object adminFunctionStore that has access to all methods in the userFunctionStore object, without copying them over individually.
*/

/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/

const userFunctionStore = {
  sayType: function () {
    console.log("I am a " + this.type);
  },
};

function userFactory(name, score) {
  let user = Object.create(userFunctionStore);
  user.type = "User";
  user.name = name;
  user.score = score;
  return user;
}

/*** CHALLENGE 10 ***/

const adminFunctionStore = {};
Object.setPrototypeOf(adminFunctionStore, userFunctionStore);

/*
Challenge 11
Create an adminFactory function that creates an object with all the same data fields (and default values) as objects of the userFactory class, but without copying each data field individually.


Challenge 12
Then make sure the value of the 'type' field for adminFactory objects is 'Admin' instead of 'User'.

Challenge 13
Make sure that adminFactory objects have access to adminFunctionStore methods, without copying them over.
*/
function adminFactory(name, score) {
  const admin = userFactory(name, score);
  admin.type = "Admin";
  Object.setPrototypeOf(admin, adminFunctionStore);
  return admin;
}

/*
Challenge 14
Created a method called sharePublicMessage that logs 'Welcome users!' and will be available to adminFactory objects, but not userFactory objects. Do not add this method directly in the adminFactory function.
*/

adminFunctionStore.sharePublicMessage = function () {
  console.log("Welcome users!");
};

const adminFromFactory = adminFactory("Eva", 5);

// /********* Uncomment these lines to test your work! *********/
adminFromFactory.sayType(); // -> Logs "I am a Admin"
adminFromFactory.sharePublicMessage(); // -> Logs "Welcome users!"

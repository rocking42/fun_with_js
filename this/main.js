// global binding
console.log(this);

var randomFunction = function( ) {

  console.log(this, window === this);
};
randomFunction();
// implicit binding
  // is the callsite a method?
  // Is the function stored in a object?
var groucho = {
  varName: "groucho",
  name: "groucho",
  speak: function ( ) {
    console.log(this, this === groucho);
    console.log(this.name);
  }
}
groucho.speak();



var math = {
  pi: 3.14,
  cos: function() {
    console.log( this, math === this );
  }
}
math.cos();




// Why did the code in question run
// Where is the call site
// What does the call site look like
  // global
console.log(this);
  // global
var sayHello = function() {
  console.log(this);
}

sayHello();

var myObj = {
  someKey: "someValues",
  someFunction: function() {
    // implicit binding
    console.log(this); //how would i access somevalue
    console.log(this.someKey);
  }
}

myObj.someFunction();
  // global
console.log( this );
// expliit binding
  // .call, .apply, .bind
  // Asking jS to set the value of the keyword this to something

var sayHi = function() {
  console.log( "Hi im " + this.firstName);
  console.log(this);
}
var harpo = {
  firstName: "Harpo"
};
var groucho = {
  firstName: "Groucho"
};
var zeppo = {
  firstName: "Zeppo"
}

sayHi(); //global
sayHi.call(harpo); //expliit binding
sayHi.call(groucho); //expliit binding
sayHi.apply(groucho); //expliit binding
sayHi.apply(harpo); //expliit binding
sayHi.call(zeppo); //expliit binding
sayHi.apply(zeppo); //expliit binding


// new binding

var f = myObj.someFunction;

var actualFunction = myObj.someFunction.bind(myObj) //binding
console.log( f, actualFunction);
f(); // global
actualFunction(); //explicit
// console.clear();

// create a copy of say helllo
// store in a var called grouchos greeting
// any time called the keyword this needs to rep the groucho obj
var grouchosGreet = sayHi.bind( groucho );
grouchosGreet

// new binding
console.clear();
// does the keyword new come before the function call if it does
// the key word this will represent a new empty object

var Dog = function(breed) {
  // {}
  this.breed = breed;
  // { breed: '' }
  this.type = "dog";
  this.eat= true;
  console.log(this);
  return this;
}

var lab = new Dog("Labrador"); // create a new object set it to the keyword this
var tammy = new Dog("Tamaskan");
var mastiff = new Dog("mastiff");



// var book
var Book = function (title, author, alreadyRead) {
  this.title = title || "Untitled"
  this.author = author || "Unauthored"
  this.alreadyRead = alreadyRead || false
  return this
}
var book1 = new Book("harry", "JK Rowling")
var book2 = new Book("never", "Peter Smith", true)
var book3 = new Book()
console.log(book1, book2, book3);




console.clear();

//global
//function called global greeting this represent window

function globalGreeting() {
  console.log(this);
}

globalGreeting()
// implicit
// make an explorer object disply full name using this

var superman = {
  name: "Clark Kent",
  occupation: "Superhero",
  displayAll: function() {
    console.log(this.name + this.occupation)
  }
}
superman.displayAll()

// Explicit binding
// have 3 objects
// use 3 obj to say hi in 3 diff ways .call .apply .bind
make1 = {
  name: "reggie"
}
make2 = {
  name: "polly"
}

make3 = {
  name: "masker"
}

var sayBye = function() {
  console.log( "hi" + this.name)
}
sayBye.call(make1)
sayBye.apply(make2)
var bound = sayBye.bind(make3)
bound();



//new binding
// create a function that quickly gererates water bottles
var Waterbottle = function(name, capacity) {
  this.name = name
  this.capacity= capacity
  return this
}


var water1 = new Waterbottle("mount", 600)
console.log(water1);


// call site matters most for determining this
// Everything comes back to the callsite
  // Find where the code is run
// How was this code actually run?

// Global
  // Look to the left and the right of the functionName
  // If there is no new keyword, if there is no object name, if there is no .call, .apply or .bind
    // It's going to be the global binding - default
// Implicit
  // Look to the left and the right of the functionName
  // If there is an object name before the functionName, this is going to be the implicit binding
// Explicit
  // Look to the left and the right of the functionName
  // Is there .call, .apply or .bind?
    // Whatever is passed in to those methods will be the set to the keyword this
// New
  // If you can see the new keyword
    // The keyword this will represent a new empty object

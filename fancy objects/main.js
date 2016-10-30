console.log("hello");

function Animal(alive, name, type, food) {
  var animal = {}

    animal.alive = alive || true
    animal.name = name
    animal.type = type || "Mammal"
    animal.food = food || "Hay"
    animal.eat = function() {
      return "This animal eats " + this.food;
    }

    return animal

}


function DogFactory(name, breed) {
  var dog = Animal()

  dog.name = name;
  dog.breed = breed;
  dog.legs = 4
  dog.bark = function() {
    console.log("Woof");
  }
  dog.loveUn = function() {
    message = "I love " + name
    console.log(message);
  }

  return dog
}
var tammy = DogFactory("suzy", "matador")
console.log(tammy);



var animal1 = Animal(true, "Jerry", "Girraffe", "hay");
console.log(animal1);


function Person(name, occupation, drink) {
  person = {}

  person.name = name
  person.occupation = occupation
  person.drink = drink
  person.describe = function() {
    return "My name is " + name + occupation
  }
  person.drinking = function() {
    return "I love to drink " + drink
  }
  person.work = function() {
    var message = "My name is " + name + " and I work as a " + occupation
    return message
  }

  return person

}


var person1 = Person("James", "Builder", "VB")
var person2 = Person("Tim", "Scaffolder", "Tooheys")

console.log(person2.work());




console.clear();

var UserFactory = function(name, gender, email) {
  var user = {}
  user.name = name
  user.gender = gender
  user.email = email
  user.readArticle = function() {
    return "Reading ..."
  }
  user.describe = function() {
    var message = (name + " " +  gender + " " + email)
    return message
  }
  return user;
}

var user1 = UserFactory("Suzy smith", "Female", "dawdaw@ga.co")
var user2 = UserFactory("Tim Pike", "Male", "tim@gmail.com")
var user3 = UserFactory("Steve Marting", "male", "dadw@sasc.com")

console.log(user1.readArticle(), user2.name);

var Admin = function(name, gender, email) {
  var admin = UserFactory(name, gender, email);
  admin.admin = true;
  admin.postArticle = function() {
    console.log("Write away");
  };
  return admin
}


var admin1 = Admin("Badger", "Male", "badger@mail.com")
var admin2 = Admin("Wolf", "Male", "wolf@ga.co")
console.log(admin1.postArticle());
console.log(admin2.describe());


// constructer pattern

var User = function(name, role) {
  this.name = name;
  this.role = role
  return this;
}

var badger = new User("badger", "TA")
var theBlade = new User("Joel", "Teacher")



var Boat = function(brand, length) {
  this.brand = brand
  this.length = length
  this.move = function() {
    return "moving"
  }
  return this
}

var boat1 = new Boat("Subaru", 55)
var boat2 = new Boat("Hyandai", 22)


console.clear();

var Vehicle = {
  type: "Vehicle",
  transport: true,
  makeMove: function() {
    console.log("currently moving");
  }
}

Vehicle.makeMove()

var Car = Object.create(Vehicle)
Car.brand = "Jag"
Car.year = 1964
Car.type = "E-type mk 3"
Car.noteForBadger = function() {
 return "Great end of course presentation"
}
console.log(Car.noteForBadger());

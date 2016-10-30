// console.log("hello");
// var chris = {
//   name: "Chris",
//   last: "alfa",
//   email: ["heffa", "help", "me", "now"]
// }
// console.log(chris.email[2]);
//
// var bookSeries = {
//   name: "In Search of Lost Time",
//   author: "Marcel Proust",
//   books: [
//       "Swann's Way",
//       "In the Shadow of Young Girls in Flower",
//       "The Guermantes Way",
//       "Sodom and Gomorrah",
//       "The Prisoner",
//       "The Fugitive",
//       "Time Regained"
//   ]
// };
//
// // Loop through each book series
//
// for (var i = 0; i < bookSeries.books.length; i++) {
//   var currentBookName = bookSeries.books[i]
//   console.log("name", currentBookName);
// }
//
// bookSeries.books[2] = "Bastard day"
// bookSeries.language = "english"
// delete bookSeries.language
// bookSeries.language = "Chinese"
// console.log(bookSeries);
//
// var emptyObj = {}
// var movie = emptyObj
// movie.name = "V for vandetta"
// movie.author = "Cilantra"
// movie.duration = 432
// movie.ratingOutOfFive = Number.MAX_SAFE_INTEGER;
//
// delete movie.ratingOutOfFive
// console.log(movie);
//
// var bestCam = {
//   name: "Leica",
//   model: "sumsung",
//   storage: "SD"
// }
//
// delete bestCam.storage
// console.log(bestCam);
//
// for ( var key in bookSeries ) {
//   console.log(key, ":", bookSeries[key]);
// }
//
// var sugar = Object.keys(movie)
//
// console.log("loop");
// for (var i = 0; i < sugar.length; i++ ) {
//   var currentKey = sugar[i]
//   var currentValue = movie[currentKey]
//   console.log(currentKey, currentValue);
// }
//
// console.clear()
//
// var explorer = {
//   firstName: "Jaques",
//   lastName: "Coustea",
//   birth: {
//     day: 21,
//     month: 6,
//     year: 1610
//   },
//   displayPurpose : function() {
//     alert("hello")
//   },
//   printMessage : function(msg) {
//     console.log(msg)
//   }
// }
//
//
//
// var fullName = explorer.firstName + " " + explorer.lastName
// var birthDay = explorer.birth.day + ":" + explorer.birth.month + ":" + explorer.birth.year
//
// console.log(fullName);
// console.log(birthDay);
// explorer.printMessage("Hello")
// explorer.printMessage("Hello")
// explorer.printMessage("Hello")
//
//
//
// var marxFamily = [
//     { name: "Groucho", birthYear: 1890 },
//     { name: "Harpo", birthYear: 1888 },
//     { name: "Chico", birthYear: 1887 },
//     { name: "Zeppo", birthYear: 1901 },
//     { name: "Gummo", birthYear: 1893 }
// ];
//
// for (var i = 0; i < marxFamily.length; i++) {
//   var male = marxFamily[i]
//   console.log(male);
//   console.log(male.name, "was born in", male.birthYear);
// }
//
// console.clear()

var explorer = {
  firstName: "Jaques",
  lastName: "Coustea",
  occupation: "Explorer",
  staetus: "legendary",
  birth: {
    day: 21,
    month: 6,
    year: 1610
  },
  displayPurpose : function() {
    alert("hello")
  },
  printMessage : function(msg) {
    console.log(msg)
  },
  displayFullName: function() {
    return this.firstName + " " + this.lastName
  },
  displayOccAndStat: function () {
    return this.staetus + " " + this.occupation
  },
  introduce: function () {
    var fullName = this.displayFullName()
    var occupation = this.displayOccAndStat()
    return "Hi im " + fullName + " with an occupation of " + occupation
  }
}

console.log(explorer.displayFullName());
console.log(explorer.displayOccAndStat());
console.log(explorer.introduce());

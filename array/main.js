// var fruits = [
//     "Mango",
//     "Orange",
//     "Banana",
//     "Apple",
//     "Kiwi Fruit"
// ];
//
// var weirdInstruments = [
//     "Badgermin",
//     "The Great Stalacpipe Organ",
//     "Stylophone",
//     "Ondes Martenot",
//     "Sharpischord",
//     "Hydraulophone",
//     "Pyrophone"
// ];
//
// var bananaIndex = fruits.indexOf("banana");
// var make1 =  fruits.splice(bananaIndex, 1);
//
// var orangeIndex = fruits.indexOf("Orange");
// var make2 = fruits.splice(orangeIndex, 1);
//
//
//
// var stylophoneIndex = weirdInstruments.indexOf("Stylophone")
// var ondesIndex = weirdInstruments.indexOf("Ondes Martenot")
// var pyroIndex = weirdInstruments.indexOf("Pyrophone")
// var make3 = weirdInstruments.splice(ondesIndex, 1)
//
// var alphabet = "abcdefghijk"
// alphaSplit = alphabet.split("")
// console.log(alphaSplit.join(" "));
// alphaSplit.forEach(function(entry) {
//     console.log(entry + 3);
// });
//
// console.log(alphaSplit[alphaSplit.length - 1]);
//
// for (var i = 0; i < alphaSplit.length - 1; i++) {
//   console.log(alphaSplit[i].toUpperCase());
// }
// alphaSplit.unshift("Grapes")
// alphaSplit.pop()
// alphaSplit.shift()
// alphaSplit.push("jerry")
//
// console.log(alphaSplit[0].toUpperCase())
// console.log(alphaSplit);
//
// console.log(alphaSplit.indexOf("b"))
//
// function isPresent(array, present) {
//   var index = array.indexOf(present);
//   if (index > 0 ) {
//     console.log("present");
//   }
//   else {
//     console.log("not present");
//   }
// }
//
// function isPresent2(array, present) {
//   if (array.includes(present)) {
//     console.log("present");
//     return "present"
//   }
//   else {
//     console.log("not present");
//     return "not present"
//   }
// }
// var example = "badawd"
// isPresent2(alphaSplit, example)
// if ((isPresent2(alphaSplit, example)) === "not present") {
//   alphaSplit.push(example)
// }
// console.log(alphaSplit);
//
// var fruits = [
//     "Mango",
//     "Orange",
//     "Banana",
//     "Apple",
//     "Kiwi Fruit"
// ];
// var main = []
// for (var i = 0; i < fruits.length; i+= 2) {
//
//   var style = main.push(fruits[i].split(""));
//   console.log(style);
// }


presidents = [
  "grandmaster flasg",
  "hella cool",
  "master flash",
  "Lincoln",
  "Lincoln",
  "Lincoln",
  "Lincoln",
  "Lincoln",
  "Lincoln",
  "Lincoln",
  "Lincoln",
  "Lincoln",
  "Lincoln",
  "Lincoln",
  "Lincoln",
  "Lincoln",
  "Lincoln",
  "Lincoln",
  "Lincoln",
  "Lincoln",
  "Lincoln",
  "Lincoln",
  "Lincoln",
  "bessa man"
]


for (var i = 0; i < presidents.length; i++) {
  var main = presidents[i]
  var next = (i + 1)
  if (next === 1 || next === 21) {
    var top1 = "st"
  }
  else if (next === 3) {
    var top1 = "rd"
  }
  else if (next >= 4 && next < 21) {
    var top1 = "th"
  }
  else {
    var top1 = "nd"
  }
  console.log(main, "is the", (i + 1) + top1, "Best president");
}

console.log(presidents);


//
// var j = i % 10,
//         k = i % 100;
//     if (j == 1 && k != 11) {
//         return i + "st";
//     }
//     if (j == 2 && k != 12) {
//         return i + "nd";
//     }
//     if (j == 3 && k != 13) {
//         return i + "rd";
//     }
//     return i + "th";

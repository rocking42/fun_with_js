// Fed up with students clapping him after every warmup, Badger devises a cunning plan to put an end to it - or at least look like he's putting an end to it. You see, Badger secretly enjoys the adulation - mocking though it may be - so he doesn't want the clapping to stop altogether.
//
// The names of those who are witnessed clapping Badger more than twice in the first four days of any one week will go into a draw. On Friday morning, a random name will be drawn from that list and the 'winner' will be forced to deliver the solution to Friday's warmup.
//
// Create a program that Badger can use for this task - ideally, you should create an object (revengeOfBadger) to do this, but if you can get it working using standalone functions, that's cool.
//
// Your program should:
//
//     Track how many times each student in the class has clapped this week;
//     Include a collection of candidates for the Friday draw (ie, a list of names of people who have clapped Badger more than twice that week);
//     Pick a random student to deliver the solution to Friday's warmup.

console.log("hello");
var peopleClapped = {
  jeremy: 2,
  james: 4,
  frank: 1,
  tom: 3,
  sherry: 4,
  harry: 2,
  cindy: 3
};
function revengeOfBadger(object) {
  var myArr = [];
    for (var prop in object ){
      if (object[prop] > 2) {
        myArr.push(prop);
      }
    }
    var randomName = myArr[Math.floor(Math.random()*myArr.length)];
    var draw = "The list of people in the draw are " + myArr + "<br>";
    return draw + " The person presenting fridays warmup is " + randomName;
}

document.querySelector("button.first").addEventListener("click", function() {
  var year = revengeOfBadger(peopleClapped);
  document.querySelector("div.one").innerHTML = year;
});

console.log(revengeOfBadger(peopleClapped));

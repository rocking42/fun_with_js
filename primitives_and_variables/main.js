// Primitive data types
// Strings
// Numbers
//Undefined
//Null
// Boolean

$(document).ready(function() {
  $("button.first").click(function() {
    var data = "Data in a variable ";
    var next = "never"
    next1 = next.toUpperCase();
    $("div.one").append(data);
    $("div.one").append(next1 + "<br>");
    console.log("It's an orange");
    console.log("the person says \"Hi\"");
    console.log("Where are we going");
    console.log(data);
  });
  $("button.second").click(function() {
    can = 42
    ahh = 1.2
    next = 3
    $("div.two").append("Add " + (can + ahh) + "<br>")
    $("div.two").append("Mutltiply " + (next * can) + "<br>")
  });

  $("button.third").click(function() {
    $("div.three").append(true + "<br>")
  });

  $("button.fourth").click(function() {
    var x = "Max power";
    var xtyped = "The value of x is " + x + "<br>"
    $("div.four").html(xtyped).toggle()
    x = "New song";
    newx = "The value of x redefined is " + x + "<br>"
    $("div.four").append(newx)
    y = 6434 % 423;
    typedx = "Y value of 6434 % 423" + y + "<br>"
    $("div.four").append(typedx)

  });
})

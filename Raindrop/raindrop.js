$(document).ready(function() {
$("button.super").click(function() {
  var output = ""
var number = $("input.first").val();
if (number % 5 === 0) {
  output += "Plang"
}
if (number % 3=== 0) {
  output += "Plang"
}
if (number % 7 === 0) {
  output += "Plong"
}
if (output.length === 0) {
  output += (number.toString())
}
$("div.one").html(output).append();

});
})

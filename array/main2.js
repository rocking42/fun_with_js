// <!-- Serge answers 'Sure.' if you ask him a question.
//
// He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
//
// He says 'Fine. Be that way!' if you address him without actually saying anything.
//
// He answers 'Whatever.' to anything else.
//
// Create a function that takes an input and returns Serge's response. -->

$(document).ready(function() {

  function sergeSays(n) {
    if (n == null || n == "") {
      return "Fine be that way"
    }
    if (n === "Hello" || n === "Hi") {
      return "Hi my friend"
    }
    if (n.toUpperCase() === n) {
      return "DON'T YELL AT ME"
    }
    if (n.endsWith("?")) {
      return "Sure"
    }
    else{
      return "It's like I don't even know you"
    }
  }

  $("button.first").click(function() {

  var response = sergeSays($("input.first").val())
    $("div.one").html(response).append();

  });

})

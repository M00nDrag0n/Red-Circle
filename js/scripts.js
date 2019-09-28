$(document).ready(function() {
  $("form#whyNot").submit(function(event) {
    event.preventDefault();

    var div = $("#why").val();
    console.log("data is", div);

    var creature;

    $("#whatever").children().remove();
    if (div * 2 > 5) {
      creature = [div + " Eyes: Mutated Space Elephant"];
    } else {
      creature = [div + " Eyes: Your Species Is Unknown In Our Files."]
    }
    $("#whatever").append("<h4>" + creature + "</h4>");

    console.log(div);
  });
});

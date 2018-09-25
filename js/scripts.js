//buisness logic
var thing1 = "";
var thing2 = "";
var thing3 = "";
var things = [];
var newThings = [];

var makeNewArray = function() {
  newThings.push(things[0]);
};

//ui logic
$(document).ready( function() {
  $("#favorite-form").submit( function(event) {
    event.preventDefault();

    var things = ["favoriteThing1", "favoriteThing2", "favoriteThing3"];
    things.forEach(function(thing) {
    var userInput = $("input#" + thing).val();
        newThings.push(userInput);
  });

    console.log(things);
    makeNewArray();
    $("#newArray").append(newThings);

   });
});

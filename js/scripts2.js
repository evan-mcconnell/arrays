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
    thing1 = $("#favoriteThing1").val();
    thing2 = $("#favoriteThing2").val();
    thing3 = $("#favoriteThing3").val();
    things.push(thing1);
    things.push(thing2);
    things.push(thing3);
    console.log(things);
    makeNewArray();
    $("#newArray").append(newThings);

   });
});

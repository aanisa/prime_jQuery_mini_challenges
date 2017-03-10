/*
    Add an event listener to the Button that is created with the
    appendDom, that when you click the button, 'meow' is console.logged.
*/

$(document).ready(function(){

  appendDom();

});

function appendDom(){
  $(".container").append("<div></div>");
  var $el = $(".container").children().last();
  $el.append("<button>Meow</button>");

  $el.on("click", "button",function(){
    console.log("Meow");
  });
}

/*
  Add a DIV to the Container Class.
  Inside the DIV, add a P tag that has your name
  Then add another P tag with the City you live in.
*/

$(document).ready(function(){
    appendDom();
});

function appendDom(){
  //Write Append Dom Code Here
  $('.container').append('<div>'+
                          '<p>Anisa<p>' +
                          '<p>Minneapolis<p>' +
                          '</div');
}

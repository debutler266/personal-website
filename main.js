//Removes & Adds the class of active to selected nav menu link
$(document).ready(function(){
  $('a').click(function(){
    var selected = $(this);
    $('a').removeClass('active');
    $(selected).addClass('active');
  });
});

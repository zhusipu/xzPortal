var ch = document.documentElement.clientHeight;
$('.nav_left').height(ch-80);
$(window).resize(function() {
  var _ch = document.documentElement.clientHeight;
  $('.nav_left').height(ch-80);
});

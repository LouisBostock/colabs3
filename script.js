 // When the user scrolls the page, show scroll bar progress
 window.onscroll = function() {myFunction()};
  
 function myFunction() {
   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
   var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
   var scrolled = (winScroll / height) * 100;
   document.getElementById("myBar").style.height = scrolled + "%";
 }
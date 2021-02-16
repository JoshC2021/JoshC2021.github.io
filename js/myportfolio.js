window.onscroll = function() {myFunction()};

let navbar = document.getElementById("topnav");
let sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) 
  {
    navbar.classList.add("sticky")
  } 
  else 
  {
    navbar.classList.remove("sticky");
  }
}

function initMap() {
  // The location of Grand Circus
let GC = {lat: 42.33607440474768, lng: -83.04983741118673};
// The map, centered at Grand Circus
let map = new google.maps.Map(
    document.getElementById('googleMap'), {zoom: 16, center: GC});
// The marker, positioned at Grand Circus
let marker = new google.maps.Marker({position: GC, map: map});
  }

/*$(function(){
    $("#nav-placeholder").load("nav.html");
  });
*/
  
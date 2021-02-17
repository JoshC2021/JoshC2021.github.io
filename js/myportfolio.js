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
  // The location of Novi
let novi = {lat: 42.48188085173423, lng: -83.48132266778806};
// The map, centered at Novi
let map = new google.maps.Map(
    document.getElementById('googleMap'), {zoom: 13, center: novi});
// The marker, positioned at Novi
let marker = new google.maps.Marker({position: novi, map: map});
  }

/*$(function(){
    $("#nav-placeholder").load("nav.html");
  });
*/
  
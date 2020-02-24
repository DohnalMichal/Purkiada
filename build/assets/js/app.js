$(document).ready(function () {
  $(".menu-icon").on("click", function () {
    $("nav ul").toggleClass("showing");
  });
});

// Scrolling Effect
$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $('nav').addClass('black');
  }

  else {
    $('nav').removeClass('black');
  }
})

const $menu = $(".menu-icon");

$(document).mouseup(function (e) {
  if (!$menu.is(e.target) // if the target of the click isn't the container...
    && $menu.has(e.target).length === 0) // ... nor a descendant of the container
  {
    $menu.removeClass('showing');
  }
});

$('.toggle').on('click', () => {
  $menu.toggleClass('showing');
});

//Registration form
//From navigation
document.getElementById("loginButton").addEventListener("click",function(){
  document.querySelector(".bg-modal").style.display = "flex";
  document.querySelector("form").style.opacity = 1;
});
//Button
document.getElementById("loginButton2").addEventListener("click",function(){
  document.querySelector(".bg-modal").style.display = "flex";
  document.querySelector("form").style.opacity = 1;
});

document.querySelector(".close").addEventListener("click", function(){
  document.querySelector(".bg-modal").style.display = "none";
});

//Closing modal on click outside of the box
const modal = document.getElementById('modal');
document.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Close on escape
$(document).keydown(function(event) { 
  if (event.keyCode == 27) { 
    $('#modal').hide();
  }
});

//Alert
function alertFunction() {
  alert("Vaše přihláška byla odeslána");
};

//Dropdown menu

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


//Scroll reveal

//Main page
ScrollReveal().reveal('.headline', { distance: '20px' });
ScrollReveal().reveal('.text, .description p', { delay: 200, duration: 1000, distance: '20px' });
ScrollReveal().reveal('.description a', { delay: 300, duration: 1200, distance: '20px' });

ScrollReveal().reveal('.information h2', { delay: 300, duration: 1000, distnace: '40px'});
ScrollReveal().reveal('.information p', { delay: 350, duration: 1000, distnace: '40px'});
ScrollReveal().reveal('.wrapper img', { delay: 300, duration: 1000, distnace: '40px'});
ScrollReveal().reveal('.information #map', { delay: 300, duration: 1000});
//Footer
ScrollReveal().reveal('footer p, footer .icons', { delay: 200, duration: 1000, distnace: '40px'});
//Nav
ScrollReveal().reveal('nav', { duration: 800, distance: '-10px' });
//Prihlaska
ScrollReveal().reveal('form', { delay: 200, duration: 1000, distance: '20px' });
//Zadani & Vysledky
ScrollReveal().reveal('.zadani, .vysledky, .informace', { delay: 200, duration: 800, distance: '20px' });
//Fotogalerie
ScrollReveal().reveal('.row', { delay: 200, duration: 800, distance: '20px' });

//Slider-show
// $('.card-show').slick({
//   infinite: true,
//   slidesToShow: 2,
//   slidesToScroll: 3
// });

//Moving background for main page
$('#moving-bg').mousemove(function(e){
   moveX = (e.pageX * -1 / 15);
   moveY = (e.pageY * -1 / 15);
  $(this).css('background-position', moveX + 'px ' + moveY + 'px')
})

$('#zadani').mousemove(function(e){
   moveX = (e.pageX * -1 / 15);
   moveY = (e.pageY * -1 / 15);
  $(this).css('background-position', moveX + 'px ' + moveY + 'px')
})

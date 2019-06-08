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
//Nav
ScrollReveal().reveal('nav', { duration: 800, distance: '-10px' });
//Prihlaska
ScrollReveal().reveal('form', { delay: 200, duration: 1000, distance: '20px' });
//Zadani & Vysledky
ScrollReveal().reveal('.zadani, .vysledky, .informace', { delay: 200, duration: 800, distance: '20px' });
//Fotogalerie
ScrollReveal().reveal('.row', { delay: 200, duration: 800, distance: '20px' });


// MDB Lightbox Init
$(function () {
  $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});
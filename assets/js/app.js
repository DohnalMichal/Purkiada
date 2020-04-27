console.log(`%c
    __      __  _____    _    _   _____    _  __  _____      __     _____              __   
   / /     / / |  __ \\  | |  | | |  __ \\  | |/ / |_   _|    /_/    |  __ \\      /\\     \\ \\  
  / /     / /  | |__) | | |  | | | |__) | | ' /    | |      / \\    | |  | |    /  \\     \\ \\ 
 < <     / /   |  ___/  | |  | | |  _  /  |  <     | |     / _ \\   | |  | |   / /\\ \\     > >
  \\ \\   / /    | |      | |__| | | | \\ \\  | . \\   _| |_   / ___ \\  | |__| |  / ____ \\   / / 
   \\_\\ /_/     |_|       \\____/  |_|  \\_\\ |_|\\_\\ |_____| /_/   \\_\\ |_____/  /_/    \\_\\ /_/                                                                                     
`, "color: #D848B0");

/*Registration of service worker */
if ('serviceWorker' in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register('../../../sw.js')
      .then(reg => console.log("Service Worker: Registered"))
      .catch(err => console.log(`Service Worker: Error: ${err}`));
  });
};

/*Smooth Scrolling */
$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});

/*Loading screen*/
$(window).on("load", function () {
  $(".loader").fadeOut("slow");
});

/*Hamburger Menu*/
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
});

const $menu = $(".menu-icon");

$(document).mouseup(function (e) {
  if (!$menu.is(e.target) // if the target of the click isn't the container...
    && $menu.has(e.target).length === 0) // ... nor a descendant of the container
  {
    $menu.removeClass('showing');
  }
});

// $('.toggle').on('click', () => {
//   $menu.toggleClass('showing');
// });

/*Registration form*/
//From navigation
function loginFunction() {
  $("#loginButton").on("click", function () {
    $(".bg-modal").css("display", "flex");
    $("form").css("opacity", 1);
    $("nav ul").removeClass("showing");
    $("body").css("overflow-y", "hidden");
  });
  //Button
  $("#loginButton2").on("click", function () {
    $(".bg-modal").css("display", "flex");
    $("form").css("opacity", 1);
    $("body").css("overflow-y", "hidden");
  });

  $(".close").on("click", function () {
    $(".bg-modal").hide();
    $("body").css("overflow-y", "scroll");
  });

  $(document).on('click', function (event) {
    if ($(event.target).is('#modal')) {
      $("#modal").hide();
      $("body").css("overflow-y", "scroll");
    }
  });

  //Close on escape
  $(document).keydown(function (event) {
    if (event.keyCode == 27) {
      $('#modal').hide();
      $("body").css("overflow-y", "scroll");
    }
  });

  // // Alert
  // function alertFunction() {
  //   alert("Vaše přihláška byla odeslána");
  // };

  /*Function for resizing vh for mobile view od skewed header*/
  // We listen to the resize event
  // window.addEventListener('resize', () => {
  //   // We execute the same script as before
  //   let vh = window.innerHeight * 0.01;
  //   document.documentElement.style.setProperty('--vh', `${vh}px`);
  // });
};

/*Scroll reveal*/
//Main page
ScrollReveal().reveal('.headline', { distance: '20px' });
ScrollReveal().reveal('.text, .description p', { delay: 200, duration: 1000, distance: '20px' });
ScrollReveal().reveal('.description a', { delay: 300, duration: 1200, distance: '20px' });
//Headers
// ScrollReveal().reveal('section h2, .animated', { delay: 300, duration: 1000, distnace: '40px'});
ScrollReveal().reveal('.information p', { delay: 350, duration: 1000, distnace: '40px' });
ScrollReveal().reveal('.wrapper .animated', { delay: 300, duration: 1000, distnace: '40px' });
ScrollReveal().reveal('.information #map', { delay: 300, duration: 1000 });
//Footer
// ScrollReveal().reveal('footer p, footer .icons', { delay: 200, duration: 1000, distnace: '40px'});
//Nav
ScrollReveal().reveal('nav', { duration: 800, distance: '-10px' });
//Prihlaska
ScrollReveal().reveal('form', { delay: 200, duration: 1000, distance: '20px' });
//Zadani & Vysledky
ScrollReveal().reveal('.zadani h1', { delay: 200, duration: 800, distance: '40px' });
ScrollReveal().reveal('.zadani h2, .zadani p', { delay: 300, duration: 800, distance: '40px' });
ScrollReveal().reveal('.card-show', { delay: 200, duration: 800, distance: '20px' });
ScrollReveal().reveal('.animated', { delay: 200, duration: 800, distance: '80px' });
// ScrollReveal().reveal('.aditional-info .wrapper .card', { delay: 100, duration: 800, distance: '20px' });
//Zadani & Vysledky Rocnik
ScrollReveal().reveal('.vysledky table', { delay: 100, duration: 800, distance: '20px' });
ScrollReveal().reveal('.buttons', { delay: 100, duration: 800, distance: '20px' });
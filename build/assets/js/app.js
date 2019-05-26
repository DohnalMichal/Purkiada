// function showNav(){
//     console.log("this is working");
//     var x = document.getElementById("responsive-nav");
//     if (x.className === "responsive-nav"){
//         x.className += " showNav";
//     } else {
//         x.className = "responsive-nav";
//     }
// }


// var navButton = document.getElementById("nav-toggle-button");

// function toggleNavDisplay(event) {
//     // prevent hyperlink from running
//     event.preventDefault();

//     // get the resonsive-nav container
//     var responsiveNav = document.getElementById("responsive-nav");

//     // toggle the showNav CSS on the responsive nav container
//     // if the showNav class is there, it is removed; else it is added
//     // with a single property: toggle
//     responsiveNav.classList.toggle("showNav");
// }

// navButton.addEventListener("click", toggleNavDisplay);


$(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
    });
});

// Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
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



// Dropdown menu

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
    }
    
    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
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
// $(document).on("click", function(e){
//       if( 
//         $(e.target).closest(".menu-icon").length == 0 &&
//         $(".menu-icon").hasClass("showing") &&
//         $(e.target).closest(".menu-icon").length == 0
//       ){
//         $('.menu').toggleClass('showing');
//       }
//     });

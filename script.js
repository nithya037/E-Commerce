
  // =====================================
  // MOBILE NAVIGATION
  // =====================================

  var menuToggle = document.querySelector(".menu-toggle");

  var mainNav = document.querySelector(".main-nav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
      mainNav.classList.toggle("open");

      if (mainNav.classList.contains("open")) {
        menuToggle.innerHTML = "✕";

        menuToggle.setAttribute("aria-expanded", "true");
      } else {
        menuToggle.innerHTML = "☰";

        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

// Announcement Close Functionality

var announcement = document.getElementById("announcement");
var closeAnnouncement = document.getElementById("closeAnnouncement");

closeAnnouncement.addEventListener("click", function () {
    announcement.style.display = "none";
});

// Hero Slider
var prev = document.querySelector(".prevBtn")
var next = document.querySelector(".nextBtn")

next.addEventListener("click", function () {
  var items = document.querySelectorAll(".itemSlide")
  document.querySelector(".slide").appendChild(items[0])
})

prev.addEventListener("click", function () {
  var items = document.querySelectorAll(".itemSlide")
  document.querySelector(".slide").prepend(items[items.length - 1])
})

// Most Wanted - Favourite Heart

var wishButtons = document.querySelectorAll(".wish-button");

wishButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        button.classList.toggle("active");

        if (button.classList.contains("active")) {
            button.innerHTML = "♥";
            button.setAttribute("aria-pressed", "true");
        } else {
            button.innerHTML = "♡";
            button.setAttribute("aria-pressed", "false");
        }

    });

});
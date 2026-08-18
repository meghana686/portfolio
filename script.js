// =========================
// MOBILE MENU
// =========================

let menuBtn = document.getElementById("menuBtn");

let navLinks = document.querySelector(".nav-links");


// When menu button is clicked

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// =========================
// CLOSE MENU AFTER CLICKING
// A NAVIGATION LINK
// =========================

let links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// =========================
// CURRENT YEAR
// =========================

let currentYear = new Date().getFullYear();

document.getElementById("copyright").textContent =
    `© ${currentYear} Meghana. All Rights Reserved.`;

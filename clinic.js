// clinic.js

// Typing animation for the text "Your Health, Our Priority"
const typed = new Typed(".multiple-text", {
    strings: [
      "Caring Doctors",
      "Modern Facilities",
      "Personalized Care",
      "24/7 Emergency Support",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1500,
    loop: true,
  });
  
  // Scroll animation (optional, can add more effects)
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);
  });
  
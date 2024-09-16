document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed(".text", {
        strings: ["Frontend Developer", "Dancer", "Painter"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});
ScrollReveal().reveal('.skillinfo', { 
  duration: 2000, 
  origin: 'bottom', 
  distance: '50px' 
});
ScrollReveal().reveal('.project1', { 
  duration: 2000, 
  origin: 'bottom', 
  distance: '50px' 
});
// const glowElements = document.querySelectorAll('.infoimg');

// glowElements.forEach(element => {
//   element.addEventListener('mouseover', () => {
//     element.style.boxShadow = '0px 0px 30px rgba(34, 255, 0, 1)';
//   });

//   element.addEventListener('mouseout', () => {
//     element.style.boxShadow = '0px 0px 10px rgba(34, 255, 0, 0.5)';
//   });
// });
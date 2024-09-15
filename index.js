document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed(".text", {
        strings: ["Frontend Developer", "Dancer", "Painter"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
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

  document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.project1');
  
    const observerOptions = {
      root: null, // Use the viewport as the container
      rootMargin: '0px',
      threshold: 0.1 // Trigger when 10% of the element is visible
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fadeInBottom');
          observer.unobserve(entry.target); // Stop observing once the animation is triggered
        }
      });
    }, observerOptions);
  
    elements.forEach(element => {
      observer.observe(element);
    });
  });


  document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.skillinfo');
  
    const observerOptions = {
      root: null, // Use the viewport as the container
      rootMargin: '0px',
      threshold: 0.1 // Trigger when 10% of the element is visible
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fadeInBottom');
          observer.unobserve(entry.target); // Stop observing once the animation is triggered
        }
      });
    }, observerOptions);
  
    elements.forEach(element => {
      observer.observe(element);
    });
  });
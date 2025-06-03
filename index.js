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
ScrollReveal().reveal('#btech', { 
  duration: 2000, 
  origin: 'right', 
  distance: '50px' 
});
ScrollReveal().reveal('#bsc', { 
  duration: 2000, 
  origin: 'left', 
  distance: '50px' 
});
ScrollReveal().reveal('#hs', { 
  duration: 2000, 
  origin: 'right', 
  distance: '50px' 
});
ScrollReveal().reveal('#s', { 
  duration: 2000, 
  origin: 'left', 
  distance: '50px' 
});
ScrollReveal().reveal('.contactinfo', { 
  duration: 2000, 
  origin: 'bottom', 
  distance: '50px' 
});
ScrollReveal().reveal('#about', { 
  duration: 2000, 
  origin: 'bottom', 
  distance: '50px' 
});


//light-mode
let lightmode = localStorage.getItem('light')
const themeswitch = document.getElementById('theme-switch')

const enablelightmode =()=>{
  document.body.classList.add('light')
  localStorage.setItem('light','active')
}

const disablelightmode = () =>{
  document.body.classList.remove('light')
  localStorage.setItem('light',null)
}

if(lightmode === "active") enablelightmode()

themeswitch.addEventListener("click",()=>{
  lightmode = localStorage.getItem('light')
  lightmode !== "active" ? enablelightmode() : disablelightmode()
})

// Counter animation function
function animateCounter(element, start, end, duration) {
    if (!element) return; // Guard clause if element doesn't exist
    
    let current = start;
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    
    // Remove the '+' before starting animation
    element.textContent = start;
    
    const timer = setInterval(() => {
        current += increment;
        element.textContent = current + '+';
        if (current === end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Intersection Observer for triggering the animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Start animations when the stats section becomes visible
            const experienceCount = document.getElementById('experience-count');
            const projectsCount = document.getElementById('projects-count');
            const techCount = document.getElementById('tech-count');
            
            animateCounter(experienceCount, 0, 2, 1500);
            animateCounter(projectsCount, 0, 10, 1500);
            animateCounter(techCount, 0, 5, 1500);
            
            // Unobserve after triggering
            statsObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});

// Start observing the stats section
document.addEventListener('DOMContentLoaded', () => {
    const statsSection = document.querySelector('.about-stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});

// Skill bars animation
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add animation class to all skill progress bars
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                bar.classList.add('animate');
            });
            // Unobserve after triggering
            skillsObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2 // Trigger when 20% of the element is visible
});

// Start observing the skills section
document.addEventListener('DOMContentLoaded', () => {
    const skillsSection = document.querySelector('.skillinfo');
    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }
});

// Initialize EmailJS

(function() {
    // Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
    emailjs.init("JNHdAPrMZme-8kJxr");
})();

// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Show loading state
    const submitButton = this.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    // Get form data
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        position: document.getElementById('position').value,
        company: document.getElementById('company').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual EmailJS service and template IDs
    emailjs.send('service_t5hk1ad', 'template_t8pfocw', formData)
    .then(function() {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
        confirmButtonText: "OK"
      });
        // Reset form
        document.getElementById('contact-form').reset();
    })
    .catch(function(error) {
      Swal.fire({
        title: "Error!",
        text: "Failed to send message. Please try again.",
        icon: "error",
        confirmButtonText: "Retry"
      });
        console.error('EmailJS error:', error);
    })
    .finally(function() {
        // Reset button state
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
    });

});


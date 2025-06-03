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


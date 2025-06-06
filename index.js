document.addEventListener("DOMContentLoaded", function () {
    // Initialize EmailJS with your public key
    emailjs.init("JNHdAPrMZme-8kJxr");

    // Get the form element
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form data
            const formData = {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                position: document.getElementById('position').value,
                company: document.getElementById('company').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };

            // Send email using EmailJS
            emailjs.send('service_t5hk1ad', 'template_t8pfocw', formData)
                .then(function(response) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your message has been sent successfully!',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    });
                    contactForm.reset();
                }, function(error) {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Failed to send message. Please try again.',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
                });
        });
    } else {
        console.warn('Contact form not found.');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add glitch effect to hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        setInterval(() => {
            if (Math.random() < 0.1) {
                heroTitle.style.textShadow = '2px 0 #ff0040, -2px 0 #00d4ff';
                setTimeout(() => {
                    heroTitle.style.textShadow = '';
                }, 100);
            }
        }, 2000);
    }

    // Parallax effect for background
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElement = document.querySelector('.background-overlay');
        if (parallaxElement) {
            const speed = scrolled * 0.5;
            parallaxElement.style.transform = `translateY(${speed}px)`;
        }
    });

    // Button hover effects with sound simulation
    const buttons = document.querySelectorAll('.cta-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        button.addEventListener('click', function() {
            // Create ripple effect
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.6)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.left = '50%';
            ripple.style.top = '50%';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.marginLeft = '-10px';
            ripple.style.marginTop = '-10px';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Service cards animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Header background on scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(10, 10, 10, 0.95)';
            header.style.borderBottom = '1px solid rgba(255, 0, 64, 0.5)';
        } else {
            header.style.background = 'rgba(10, 10, 10, 0.9)';
            header.style.borderBottom = '1px solid rgba(255, 0, 64, 0.3)';
        }
    });

    // Form submission
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'SENDING...';
            submitButton.disabled = true;
            submitButton.style.opacity = '0.7';
            
            setTimeout(() => {
                submitButton.textContent = 'MESSAGE SENT!';
                submitButton.style.background = 'var(--gradient-secondary)';
                
                setTimeout(() => {
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                    submitButton.style.opacity = '1';
                    submitButton.style.background = 'var(--gradient-primary)';
                    this.reset();
                }, 2000);
            }, 1500);
        });
    }

    // Add dynamic typing effect to hero subtitle
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        const originalText = heroSubtitle.textContent;
        heroSubtitle.textContent = '';
        
        let index = 0;
        const typeInterval = setInterval(() => {
            heroSubtitle.textContent += originalText[index];
            index++;
            
            if (index >= originalText.length) {
                clearInterval(typeInterval);
            }
        }, 100);
    }

    // Add particle effect to background
    function createParticle() {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.background = Math.random() > 0.5 ? 'var(--neon-red)' : 'var(--neon-blue)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = '-10px';
        particle.style.pointerEvents = 'none';
        particle.style.animation = 'fall 3s linear forwards';
        particle.style.opacity = '0.6';
        particle.style.boxShadow = `0 0 6px ${particle.style.background}`;
        particle.style.zIndex = '1';
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 3000);
    }

    // Create particles periodically
    setInterval(createParticle, 200);

    // Booking Modal functionality
    const bookingModal = document.getElementById('bookingModal');
    const bookServiceButton = document.querySelector('.cta-button.primary');
    const closeModal = document.querySelector('.close');
    const bookingForm = document.getElementById('bookingForm');

    // Open booking modal when BOOK SERVICE button is clicked
    if (bookServiceButton) {
        bookServiceButton.addEventListener('click', function() {
            bookingModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }

    // Close modal when X is clicked
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            bookingModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    // Close modal when clicking outside of modal content
    window.addEventListener('click', function(event) {
        if (event.target === bookingModal) {
            bookingModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Handle booking form submission
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('customerName').value,
                email: document.getElementById('customerEmail').value,
                phone: document.getElementById('customerPhone').value,
                serviceType: document.getElementById('serviceType').value,
                motorcycleMake: document.getElementById('motorcycleMake').value,
                motorcycleModel: document.getElementById('motorcycleModel').value,
                motorcycleYear: document.getElementById('motorcycleYear').value,
                preferredDate: document.getElementById('preferredDate').value,
                preferredTime: document.getElementById('preferredTime').value,
                notes: document.getElementById('serviceNotes').value
            };

            // Simulate booking submission
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'PROCESSING...';
            submitButton.disabled = true;
            submitButton.style.opacity = '0.7';
            
            setTimeout(() => {
                submitButton.textContent = 'BOOKING CONFIRMED!';
                submitButton.style.background = 'var(--gradient-secondary)';
                
                // Show success message
                alert(`Thank you, ${formData.name}! Your booking has been confirmed.\n\nService: ${formData.serviceType}\nVehicle: ${formData.motorcycleYear} ${formData.motorcycleMake} ${formData.motorcycleModel}\nDate: ${formData.preferredDate}\nTime: ${formData.preferredTime}\n\nWe'll contact you at ${formData.email} or ${formData.phone} to confirm details.`);
                
                setTimeout(() => {
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                    submitButton.style.opacity = '1';
                    submitButton.style.background = 'var(--gradient-primary)';
                    this.reset();
                    bookingModal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }, 2000);
            }, 1500);
        });
    }

    // Set minimum date to today
    const dateInput = document.getElementById('preferredDate');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
    }
});

// Add keyframes for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes fall {
        to {
            transform: translateY(100vh);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
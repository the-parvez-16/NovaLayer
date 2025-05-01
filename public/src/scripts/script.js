// Initialize particles.js as full page background
document.addEventListener('DOMContentLoaded', function () {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 120,
                "density": {
                    "enable": true,
                    "value_area": 1000
                }
            },
            "color": {
                "value": ["#9c27b0", "#2196F3", "#E91E63"]
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 4,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 3,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 120,
                "color": "#7b1fa2",
                "opacity": 0.3,
                "width": 1.5
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": true,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 0.8
                    }
                },
                "bubble": {
                    "distance": 200,
                    "size": 20,
                    "duration": 1,
                    "opacity": 0.8,
                    "speed": 2
                },
                "repulse": {
                    "distance": 100,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 6
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    // Mouse follower effect
    const follower = document.querySelector('.mouse-follower');
    document.addEventListener('mousemove', (e) => {
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';

        // Change color based on position
        const hue = (e.clientX / window.innerWidth) * 360;
        const saturation = 80;
        const lightness = 50;
        follower.style.background = `radial-gradient(circle, hsla(${hue}, ${saturation}%, ${lightness}%, 0.7), transparent 70%)`;
    });

    // Make follower pulse when clicking
    document.addEventListener('click', () => {
        follower.style.transform = 'translate(-50%, -50%) scale(2)';
        setTimeout(() => {
            follower.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 300);
    });

    // Make follower interact with clickable elements
    document.querySelectorAll('a, button, .portfolio-item, .service-card, .testimonial-card').forEach(el => {
        el.addEventListener('mouseenter', () => {
            follower.style.transform = 'translate(-50%, -50%) scale(2)';
            follower.style.opacity = '0.5';
        });
        el.addEventListener('mouseleave', () => {
            follower.style.transform = 'translate(-50%, -50%) scale(1)';
            follower.style.opacity = '1';
        });
    });

    // Animation on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        const windowHeight = window.innerHeight;
        const scrollPosition = window.scrollY || window.pageYOffset;

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top + scrollPosition;
            const elementHeight = element.offsetHeight;

            if (scrollPosition > elementPosition - windowHeight + elementHeight / 3) {
                element.classList.add('animated');
            }
        });
    }

    // Initial check and add scroll event listener
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);

    // Navbar scroll effect
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll indicator click
    document.querySelector('.scroll-indicator').addEventListener('click', function () {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });

    // RGB effect for buttons on hover
    document.querySelectorAll('.hero-btn, .cta-btn, .btn-primary').forEach(button => {
        button.addEventListener('mouseenter', function () {
            this.style.animation = 'gradientBG 2s ease infinite, pulseGlow 1s ease infinite alternate';
        });
        button.addEventListener('mouseleave', function () {
            this.style.animation = 'gradientBG 4s ease infinite, pulseGlow 2s ease infinite alternate';
        });
    });

    // Add ripple effect to buttons
    document.querySelectorAll('.hero-btn, .cta-btn, .btn-primary').forEach(button => {
        button.addEventListener('click', function (e) {
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;

            const ripple = document.createElement('span');
            ripple.classList.add('ripple-effect');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 1000);
        });
    });

    // Add style for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        .ripple-effect {
            position: absolute;
            transform: translate(-50%, -50%);
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            animation: ripple 1s ease-out;
            pointer-events: none;
        }
        
        @keyframes ripple {
            to {
                transform: translate(-50%, -50%) scale(20);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});
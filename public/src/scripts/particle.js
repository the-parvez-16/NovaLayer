// Initialize particles.js
document.addEventListener('DOMContentLoaded', function() {
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#00ffff"
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
                "value": 3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#00ffff",
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
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
                    "mode": "grab"
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
                        "opacity": 0.5
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    // Service content data
    const servicesData = {
        custom: {
            title: "Custom Website Development",
            content: `
                <div class="service-details">
                    <h3>Tailored Web Solutions</h3>
                    <p>We build completely custom websites designed specifically for your business needs and brand identity.</p>
                    
                    <h4>Key Features:</h4>
                    <ul>
                        <li>100% unique design (no templates)</li>
                        <li>Mobile-first responsive development</li>
                        <li>SEO-optimized architecture</li>
                        <li>Custom functionality development</li>
                        <li>Performance optimization</li>
                        <li>Cross-browser compatibility</li>
                    </ul>
                    
                    <h4>Technologies We Use:</h4>
                    <ul>
                        <li>HTML5, CSS3, JavaScript (ES6+)</li>
                        <li>React.js, Vue.js, Angular</li>
                        <li>Node.js, Python, PHP</li>
                        <li>MongoDB, PostgreSQL, MySQL</li>
                        <li>GraphQL, REST APIs</li>
                        <li>Webpack, Babel, Sass</li>
                    </ul>
                </div>
            `
        },
        ecommerce: {
            title: "E-commerce Development",
            content: `
                <div class="service-details">
                    <h3>Powerful Online Stores</h3>
                    <p>We develop high-converting e-commerce websites with all the features you need to sell online successfully.</p>
                    
                    <h4>E-commerce Features:</h4>
                    <ul>
                        <li>Product catalog management</li>
                        <li>Secure payment gateways integration</li>
                        <li>Shopping cart and checkout system</li>
                        <li>Inventory and order management</li>
                        <li>Customer accounts and reviews</li>
                        <li>Shipping and tax calculation</li>
                    </ul>
                    
                    <h4>Platforms We Work With:</h4>
                    <ul>
                        <li>Custom e-commerce solutions</li>
                        <li>Shopify development</li>
                        <li>WooCommerce (WordPress)</li>
                        <li>Magento/Adobe Commerce</li>
                        <li>BigCommerce</li>
                        <li>Headless commerce solutions</li>
                    </ul>
                </div>
            `
        },
        webapps: {
            title: "Web Application Development",
            content: `
                <div class="service-details">
                    <h3>Interactive Web Applications</h3>
                    <p>We build dynamic web applications with complex functionality and seamless user experiences.</p>
                    
                    <h4>Web App Capabilities:</h4>
                    <ul>
                        <li>User authentication and authorization</li>
                        <li>Real-time data processing</li>
                        <li>Interactive dashboards</li>
                        <li>Complex form handling</li>
                        <li>Data visualization</li>
                        <li>API integrations</li>
                    </ul>
                    
                    <h4>Types of Web Apps We Build:</h4>
                    <ul>
                        <li>SaaS platforms</li>
                        <li>CRM and ERP systems</li>
                        <li>Project management tools</li>
                        <li>Collaboration platforms</li>
                        <li>Data analytics dashboards</li>
                        <li>Custom business solutions</li>
                    </ul>
                </div>
            `
        },
        cms: {
            title: "CMS Development",
            content: `
                <div class="service-details">
                    <h3>Content Management Solutions</h3>
                    <p>We create easy-to-manage websites with powerful content management capabilities.</p>
                    
                    <h4>CMS Features:</h4>
                    <ul>
                        <li>Custom theme development</li>
                        <li>Plugin/module customization</li>
                        <li>Headless CMS implementations</li>
                        <li>Multi-language support</li>
                        <li>User role management</li>
                        <li>Content versioning</li>
                    </ul>
                    
                    <h4>Platforms We Specialize In:</h4>
                    <ul>
                        <li>WordPress (custom themes/plugins)</li>
                        <li>Shopify (theme development)</li>
                        <li>Drupal</li>
                        <li>Joomla</li>
                        <li>Strapi</li>
                        <li>Contentful</li>
                    </ul>
                </div>
            `
        },
        api: {
            title: "API Integration",
            content: `
                <div class="service-details">
                    <h3>Seamless System Integration</h3>
                    <p>We connect your website with external services and internal systems through secure API integrations.</p>
                    
                    <h4>Integration Services:</h4>
                    <ul>
                        <li>Payment gateway integration</li>
                        <li>CRM/ERP system connections</li>
                        <li>Marketing automation tools</li>
                        <li>Shipping and logistics APIs</li>
                        <li>Social media platform APIs</li>
                        <li>Custom API development</li>
                    </ul>
                    
                    <h4>Our Integration Approach:</h4>
                    <ol>
                        <li>Requirement analysis</li>
                        <li>API documentation review</li>
                        <li>Authentication setup</li>
                        <li>Endpoint integration</li>
                        <li>Data mapping and transformation</li>
                        <li>Testing and error handling</li>
                    </ol>
                </div>
            `
        },
        maintenance: {
            title: "Website Maintenance",
            content: `
                <div class="service-details">
                    <h3>Ongoing Support & Maintenance</h3>
                    <p>We provide comprehensive website maintenance services to keep your site secure, fast, and up-to-date.</p>
                    
                    <h4>Maintenance Services:</h4>
                    <ul>
                        <li>Regular security updates</li>
                        <li>Performance optimization</li>
                        <li>Content updates and changes</li>
                        <li>Backup management</li>
                        <li>Uptime monitoring</li>
                        <li>Emergency support</li>
                    </ul>
                    
                    <h4>Our Maintenance Plans:</h4>
                    <ul>
                        <li><strong>Basic:</strong> Security updates, monthly backups</li>
                        <li><strong>Standard:</strong> Weekly updates, performance checks</li>
                        <li><strong>Premium:</strong> Daily monitoring, content updates</li>
                        <li><strong>Enterprise:</strong> Dedicated support, SLA guarantees</li>
                    </ul>
                </div>
            `
        }
    };

    // Modal functionality
    const modalOverlay = document.getElementById('serviceModal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const closeModal = document.querySelector('.close-modal');
    const learnMoreBtns = document.querySelectorAll('.learn-more-btn');

    // Open modal with service details
    learnMoreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const service = this.getAttribute('data-service');
            const serviceData = servicesData[service];
            
            if (serviceData) {
                modalTitle.textContent = serviceData.title;
                modalBody.innerHTML = serviceData.content;
                modalOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal
    closeModal.addEventListener('click', function() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside content
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Close modal with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Animate elements when they come into view
    const animateElements = document.querySelectorAll('.service-card, .section-title, .portfolio-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    animateElements.forEach(element => {
        observer.observe(element);
    });
});
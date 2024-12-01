// document.addEventListener('DOMContentLoaded', () => {
//     // Mobile menu toggle
//     const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
//     const navLinks = document.querySelector('.nav-links');

//     mobileMenuBtn.addEventListener('click', () => {
//         navLinks.classList.toggle('active');
//         const spans = mobileMenuBtn.querySelectorAll('span');
//         spans[0].style.transform = navLinks.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : '';
//         spans[1].style.opacity = navLinks.classList.contains('active') ? '0' : '1';
//         spans[2].style.transform = navLinks.classList.contains('active') ? 'rotate(-45deg) translate(7px, -7px)' : '';
//     });

//     // Smooth scroll for anchor links
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function (e) {
//             e.preventDefault();
//             const target = document.querySelector(this.getAttribute('href'));
//             if (target) {
//                 target.scrollIntoView({
//                     behavior: 'smooth',
//                     block: 'start'
//                 });
//                 // Close mobile menu if open
//                 navLinks.classList.remove('active');
//             }
//         });
//     });

//     // Add scroll animation for features and resources
//     const observerOptions = {
//         threshold: 0.1,
//         rootMargin: '0px 0px -50px 0px'
//     };

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.style.opacity = '1';
//                 entry.target.style.transform = 'translateY(0)';
//             }
//         });
//     }, observerOptions);

//     document.querySelectorAll('.feature-card, .resource-card').forEach(el => {
//         el.style.opacity = '0';
//         el.style.transform = 'translateY(20px)';
//         el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
//         observer.observe(el);
//     });
// });
 


// JavaScript Functionality for ENGIEDGE Website

document.addEventListener("DOMContentLoaded", () => {
    // Toggle Mobile Menu
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });

    // Semester-specific functionality
    const semesterButtons = document.querySelectorAll('.buttons1, .buttons2, .buttons3, .buttons4, .buttons5, .buttons6, .buttons7, .buttons8');

    semesterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const semester = button.textContent.trim();
            alert(`Displaying resources for ${semester}. This functionality will be activated soon.`);
        });
    });

    // Scroll-to-section functionality
    const scrollLinks = document.querySelectorAll('a[href^="#"]');

    scrollLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Adjust for navbar height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Login Button Interaction
    const loginBtn = document.querySelector('.login-btn');

    loginBtn.addEventListener('click', () => {
        alert('Redirecting to login page (placeholder functionality).');
        // Add redirect or modal functionality here
    });

    // Highlight active section on scroll
    const sections = document.querySelectorAll('section');
    const navLinksArray = Array.from(navLinks.querySelectorAll('a'));

    const updateActiveLink = () => {
        const scrollY = window.scrollY;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop - 60; // Adjust for navbar height
            const sectionHeight = section.offsetHeight;

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinksArray.forEach(link => link.classList.remove('active'));
                navLinksArray[index].classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', updateActiveLink);
});
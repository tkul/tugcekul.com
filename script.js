document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelectorAll(".project-card").length > 0) {
        VanillaTilt.init(document.querySelectorAll(".project-card"), {
            max: 15,
            speed: 300,
            glare: true,
            "max-glare": 0.3
        });
    }

    gsap.from("h1", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".social-links a", { opacity: 0, y: 20, duration: 1 });
    gsap.from(".project-box", { opacity: 0, y: 50, duration: 1 });
    gsap.from(".project-card", { opacity: 0, y: 50, duration: 1 });
    gsap.from(".about-box", { opacity: 0, y: 50, duration: 1 });
    gsap.from(".about-me", { opacity: 0, y: 50, duration: 1 });
});

document.addEventListener("DOMContentLoaded", () => {

    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });
    }

    const currentPage = window.location.pathname.split('/').pop();
    const navLinks2 = document.querySelectorAll('.nav-link');

    navLinks2.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage ||
            (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });

    gsap.from(".main-nav", { y: -100, opacity: 0, duration: 1 });
});

function goBack() {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        window.location.href = 'index.html';
    }
}

document.addEventListener("DOMContentLoaded", () => {

    if (document.querySelector('.back-button')) {
        gsap.from(".back-button", {
            opacity: 0,
            y: 30,
            duration: 0.8,
            delay: 0.5
        });
    }
});


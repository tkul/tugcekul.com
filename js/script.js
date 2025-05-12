document.addEventListener("DOMContentLoaded", () => {
    // GSAP animasyonları
    if (document.querySelector("h1")) {
        gsap.from("h1", { opacity: 0, y: -50, duration: 1 });
    }
    if (document.querySelector(".main-nav")) {
        gsap.from(".main-nav", { y: -100, opacity: 0, duration: 1 });
    }
    if (document.querySelector(".back-button")) {
        gsap.from(".back-button", { opacity: 0, y: 30, duration: 0.8, delay: 0.5 });
    }

    // Mobile menu
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });
    }

    // Nav active link
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks2 = document.querySelectorAll('.nav-link');
    navLinks2.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Flip card
    document.querySelectorAll(".flip-card").forEach(card => {
        card.addEventListener("click", () => {
            card.querySelector(".flip-card-inner").classList.toggle("flipped");
        });
    });

    // Tilt
    if (document.querySelectorAll(".project-card").length > 0) {
        VanillaTilt.init(document.querySelectorAll(".project-card"), {
            max: 15,
            speed: 300,
            glare: true,
            "max-glare": 0.3
        });
    }

    // MASONRY with imagesLoaded
    const grid = document.querySelector('.grid');
    if (grid) {
        imagesLoaded(grid, function () {
            new Masonry(grid, {
                itemSelector: '.grid-item',
                columnWidth: '.grid-item',
                percentPosition: true,
                gutter: 10
            });
        });
    }
});

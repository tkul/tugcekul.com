document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelectorAll(".project-card").length > 0) {
        VanillaTilt.init(document.querySelectorAll(".project-card"), {
            max: 15,
            speed: 300,
            glare: true,
            "max-glare": 0.3
        });
    }

    if (document.querySelector("h1")) {
        gsap.from("h1", { opacity: 0, y: -50, duration: 1 });
    }
    if (document.querySelector(".social-links a")) {
        gsap.from(".social-links a", { opacity: 0, y: 20, duration: 1 });
    }
    if (document.querySelector(".project-box")) {
        gsap.from(".project-box", { opacity: 0, y: 50, duration: 1 });
    }
    if (document.querySelector(".project-card")) {
        gsap.from(".project-card", { opacity: 0, y: 50, duration: 1 });
    }
    if (document.querySelector(".about-box")) {
        gsap.from(".about-box", { opacity: 0, y: 50, duration: 1 });
    }
    if (document.querySelector(".about-me")) {
        gsap.from(".about-me", { opacity: 0, y: 50, duration: 1 });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
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

    if (document.querySelector(".main-nav")) {
        gsap.from(".main-nav", { y: -100, opacity: 0, duration: 1 });
    }
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

document.addEventListener("DOMContentLoaded", function () {
    var grid = document.querySelector('.grid');
    var masonry = new Masonry(grid, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-item',
        percentPosition: true,
        gutter: 10
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".flip-card").forEach(card => {
        card.addEventListener("click", () => {
            card.querySelector(".flip-card-inner").classList.toggle("flipped");
        });
    });
});

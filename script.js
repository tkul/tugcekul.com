document.addEventListener("DOMContentLoaded", () => {
    VanillaTilt.init(document.querySelectorAll(".project-card"), {
        max: 15,
        speed: 300,
        glare: true,
        "max-glare": 0.3
    });

    gsap.from("h1", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".social-links a", { opacity: 0, y: 20, stagger: 0.2, duration: 1 });
    gsap.from(".project-box", { opacity: 0, y: 50, duration: 1 });
    gsap.from(".project-card", { opacity: 0, y: 50, duration: 1 });
    gsap.from(".about-box", { opacity: 0, y: 50, duration: 1 });
    gsap.from(".about-me", { opacity: 0, y: 50, duration: 1 });
});

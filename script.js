// ================================
// Lumen Studios Portfolio
// ================================

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// ================================
// Active Navigation Link
// ================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ================================
// Navbar Shadow
// ================================

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        nav.classList.add("scrolled");

    } else {

        nav.classList.remove("scrolled");

    }

});


// ================================
// Scroll Animations
// ================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".card, .developer-card").forEach(card => {
    observer.observe(card);
});


// ================================
// Hero Animation
// ================================

window.addEventListener("load", () => {

    document.querySelector(".hero").classList.add("hero-visible");

});


// ================================
// Button Hover Glow
// ================================

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-4px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0px)";

    });

});


// ================================
// Contact Button Animation
// ================================

const contactButton = document.querySelector(".contact-button");

if (contactButton) {

    contactButton.addEventListener("mouseenter", () => {

        contactButton.style.transform = "scale(1.04)";

    });

    contactButton.addEventListener("mouseleave", () => {

        contactButton.style.transform = "scale(1)";

    });

}
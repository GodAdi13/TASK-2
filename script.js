// Welcome Message
function showMessage() {
    alert("Thank you for choosing Golden Wheel Restaurant!\n\nWe look forward to serving you.");
}

// Smooth fade animation
window.addEventListener("load", function () {
    document.body.style.opacity = "1";
});

// Highlight active navigation
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {
            link.classList.add("active");
        }
    });
});

// Simple image click zoom
const images = document.querySelectorAll(".card img");

images.forEach(img => {

    img.addEventListener("click", function () {

        if (this.style.transform == "scale(1.8)") {

            this.style.transform = "scale(1)";
            this.style.cursor = "zoom-in";

        } else {

            this.style.transform = "scale(1.8)";
            this.style.transition = "0.4s";
            this.style.cursor = "zoom-out";

        }

    });

});

// Fade body
document.body.style.opacity = "0";
document.body.style.transition = "0.8s";

// Footer Year
const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML = "© " + new Date().getFullYear() + " Golden Wheel Restaurant";
}

console.log("Restaurant Website Loaded Successfully");
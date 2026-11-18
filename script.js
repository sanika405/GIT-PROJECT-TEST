
// MOBILE MENU
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});

// CLOSE MENU
const links = document.querySelectorAll(".nav-links a");

links.forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.classList.remove("active");
    });
});

// PUT YOUR WORD
const wordForm = document.getElementById("word-form");
const wordList = document.getElementById("word-list");

wordForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const visitorName =
        document.getElementById("visitor-name").value.trim();

    const visitorWord =
        document.getElementById("visitor-word").value.trim();

    if (!visitorName || !visitorWord) {
        return;
    }

    const wordCard = document.createElement("div");
    wordCard.className = "word-card";

    const heading = document.createElement("h4");
    heading.textContent = "💗 " + visitorName;

    const paragraph = document.createElement("p");
    paragraph.textContent = visitorWord;

    wordCard.appendChild(heading);
    wordCard.appendChild(paragraph);

    wordList.prepend(wordCard);

    wordForm.reset();
});

// CONTACT FORM
const contactForm = document.getElementById("contact-form");
const message = document.getElementById("message");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    message.textContent =
        "Thank you, " + name + "! Your message has been received. 💗";

    contactForm.reset();
});

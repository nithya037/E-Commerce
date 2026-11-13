// Demo contact form: validates through native HTML validation and displays feedback.
const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = contactForm.elements.name.value.trim();
    const message = contactForm.querySelector(".form-message");
    message.textContent = `Thanks, ${name}! Your message is ready. Connect a backend to receive submissions.`;
    contactForm.reset();
  });
}

const newsletter = document.querySelector(".newsletter-form");

if (newsletter) {
  newsletter.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = newsletter.querySelector("input").value.trim();
    newsletter.nextElementSibling.textContent = `Thanks for joining us, ${email}!`;
    newsletter.reset();
  });
}

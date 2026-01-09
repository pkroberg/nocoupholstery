import "./style.css";
import { initSlider } from "./slider.js";
initSlider();

// Gallery dropdown menu
document.addEventListener("DOMContentLoaded", function () {
  const dropdownBtn = document.getElementById("dropdownBtn");
  const dropdown = document.getElementById("dropdown");
  let timeoutId;

  dropdownBtn.addEventListener("mouseover", function () {
    clearTimeout(timeoutId);
    dropdown.classList.remove("hidden");
  });

  dropdownBtn.addEventListener("mouseout", function () {
    timeoutId = setTimeout(() => dropdown.classList.add("hidden"), 300);
  });

  dropdown.addEventListener("mouseover", function () {
    clearTimeout(timeoutId);
  });

  dropdown.addEventListener("mouseout", function () {
    timeoutId = setTimeout(() => dropdown.classList.add("hidden"), 300);
  });
});

// Toggle mobile menu
document.getElementById("nav-toggle").onclick = function () {
  document.getElementById("nav-content").classList.toggle("hidden");
};

// Reset Input Fields on Form Submit
window.onload = function () {
  const form = document.getElementById("contact-form");
  if (form) {
    form.reset();
  }
};

// Gallery Full Page View
const fullPage = document.querySelector("#fullpage");

if (fullPage) {
  const imgs = document.querySelectorAll(".gallery img");

  imgs.forEach((img) => {
    img.addEventListener("click", function () {
      fullPage.style.backgroundImage = "url(" + img.src + ")";
      fullPage.style.backgroundColor = "white";
      fullPage.style.display = "block";
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    });
  });

  fullPage.addEventListener("click", function () {
    fullPage.style.display = "none";
    document.body.style.overflow = "auto";
  });
}



document.addEventListener("DOMContentLoaded", () => {
  // Phone
  const phoneParts = ['970', '219', '0571'];
  const phoneLink = document.getElementById('phone-link');

  if (phoneLink) {
    const phoneNumber = phoneParts.join('');
    phoneLink.href = `tel:+1${phoneNumber}`;
    phoneLink.textContent = `(${phoneParts[0]}) ${phoneParts[1]}-${phoneParts[2]}`;
    phoneLink.setAttribute('aria-label', 'Call us');
  }

  // Email
  const emailParts = ['clay', 'focoupholstery.com'];
  const emailLink = document.getElementById('email-link');

  if (emailLink) {
    const email = `${emailParts[0]}@${emailParts[1]}`;
    emailLink.href = `mailto:${email}`;
    emailLink.textContent = email;
    emailLink.setAttribute('aria-label', 'Email us');
  }
});
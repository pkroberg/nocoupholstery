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
  document.getElementById("contact-form").reset();
};

// Gallery Full Page View
function getPics() {}
const imgs = document.querySelectorAll(".gallery img");
const fullPage = document.querySelector("#fullpage");

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
  document.body.style.overflow = "auto"; // Re-enable scrolling
});

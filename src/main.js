import "./style.css";

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

/* Why: keep values obfuscated in the DOM until user interaction to reduce scraping. */
(function () {
  // helper: reverse string (used to de-obfuscate)
  function reverseStr(s) {
    return s.split("").reverse().join("");
  }

  // format tel string to standard href (remove spaces/parentheses/dashes)
  function toTelHref(s) {
    return "tel:" + s.replace(/[^\d+]/g, "");
  }

  // find all reveal buttons
  const buttons = Array.from(document.querySelectorAll(".reveal-btn"));

  buttons.forEach((btn) => {
    btn.addEventListener("click", function handleReveal(e) {
      const type = btn.getAttribute("data-type"); // 'tel' or 'mailto'
      const targetId = btn.getAttribute("aria-controls");
      const target = document.getElementById(targetId);
      if (!target) return;

      // Already revealed? toggle behavior: do nothing if already revealed.
      if (btn.getAttribute("aria-expanded") === "true") return;

      // read obfuscated string and reverse it
      const obf = target.getAttribute("data-obf") || "";
      const real = reverseStr(obf);

      // create anchor depending on type
      let anchor;
      if (type === "tel") {
        anchor = document.createElement("a");
        anchor.setAttribute("href", toTelHref(real));
        anchor.setAttribute("aria-label", "Call " + real);
        anchor.textContent = real;
      } else {
        // mailto
        anchor = document.createElement("a");
        anchor.setAttribute("href", "mailto:" + real);
        anchor.setAttribute("aria-label", "Email " + real);
        anchor.textContent = real;
      }

      // Replace the placeholder text with the anchor
      target.textContent = ""; // clear placeholder
      target.appendChild(anchor);

      // update ARIA and button state
      btn.setAttribute("aria-expanded", "true");
      btn.textContent = "Revealed";
      btn.disabled = true; // prevent repeated exposure (optional)
      btn.classList.add("opacity-60", "cursor-default");
    });
  });
})();

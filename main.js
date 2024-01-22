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

// Slideshow

document.addEventListener("DOMContentLoaded", function () {
  var counter = 1;
  document.getElementById("radio" + counter).checked = true;
  counter++;
  setInterval(function () {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 4) {
      counter = 1;
    }
  }, 5000);
});

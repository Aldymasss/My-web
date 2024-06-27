function scrollToElement(elementSelector, instance = 0) {
  const elements = document.querySelectorAll(elementSelector);
  if (elements.length > instance) {
    elements[instance].scrollIntoView({ behavior: "smooth" });
  }
}

function toggleTheme() {
  var body = document.body;
  body.classList.toggle("dark-theme");
  body.classList.toggle("light-theme");
  body.classList.toggle("text-black");
  var themeToggle = document.querySelector(".theme-toggle");
  themeToggle.classList.toggle("dark");
}

document.addEventListener("DOMContentLoaded", function () {
  const link1 = document.getElementById("link1");
  const link2 = document.getElementById("link2");
  const link3 = document.getElementById("link3");

  link1.addEventListener("click", () => {
    scrollToElement(".header");
  });

  link2.addEventListener("click", () => {
    scrollToElement(".header", 1);
  });

  link3.addEventListener("click", () => {
    scrollToElement(".column");
  });
});

const menuButton = document.querySelector("#menuButton");
const navLinks = document.querySelector("#navLinks");
const year = document.querySelector("#year");

menuButton?.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

year.textContent = new Date().getFullYear();

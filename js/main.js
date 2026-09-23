const WHATSAPP_NUMBER = "5516981111977";

const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

const setMenu = (isOpen) => {
  nav.classList.toggle("is-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
};

navToggle.addEventListener("click", () => {
  setMenu(!nav.classList.contains("is-open"));
});

nav.querySelectorAll(".nav__link").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

document.addEventListener("click", (event) => {
  if (!nav.contains(event.target) && !navToggle.contains(event.target)) {
    setMenu(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && nav.classList.contains("is-open")) {
    setMenu(false);
    navToggle.focus();
  }
});

document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contactForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = form.name.value.trim();
  const message = form.message.value.trim();

  const text = `Olá, Matheus! Meu nome é ${name}. ${message}`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener");
});

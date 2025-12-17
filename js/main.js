const button = document.querySelector("#themeToggle");
const body = document.body;

// sprawdzamy zapisany tryb przy starcie
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.classList.add("dark");
}

// kliknięcie przycisku
button.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

const hamburger = document.querySelector("#hamburger");
const navLinks = document.querySelector("#navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const animatedElements = document.querySelectorAll(".animate");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

animatedElements.forEach((el) => observer.observe(el));

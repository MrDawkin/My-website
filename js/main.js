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

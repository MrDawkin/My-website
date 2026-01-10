/* ===============================
   DOM ELEMENTS
================================ */

const body = document.body;
const themeToggle = document.getElementById("themeToggle");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

const openTerminalBtn = document.getElementById("openTerminal");
const terminalSection = document.getElementById("terminal");
const terminalBody = document.getElementById("terminalBody");
const terminalInput = document.getElementById("terminalInput");

/* ===============================
   THEME TOGGLE
================================ */

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  body.classList.remove("dark");
} else { 
  body.classList.add("dark");
  localStorage.setItem("theme", "dark");
}

const syncIcon = () => {
  const icon = themeToggle?.querySelector(".theme-toggle__icon");
  if (!icon) return;
  icon.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
};

syncIcon();

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
    syncIcon();
  });
}


/* ===============================
   MOBILE NAV
================================ */

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/* ===============================
   SCROLL ANIMATIONS
================================ */

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
  { threshold: 0.2 }
);

animatedElements.forEach((el) => observer.observe(el));

/* ===============================
   OPEN TERMINAL
================================ */

openTerminalBtn.addEventListener("click", () => {
  terminalSection.scrollIntoView({ behavior: "smooth" });

  setTimeout(() => {
    terminalSection.classList.add("terminal-active");
    terminalInput.focus();
  }, 500);
});

/* ===============================
   TERMINAL DATA
================================ */

let cwd = "~"; // current directory

const SECTIONS = ["about", "stack", "projects", "contact"];

const FILE_SYSTEM = {
  "about.txt": `
👋 MrDawkin — Junior DevOps Engineer

I work with ERP systems in production, dev and test environments.
Focused on automation, CI/CD and infrastructure stability.
`,

  "stack.txt": `
🧰 Stack:
- Linux / Windows Server
- Docker
- PostgreSQL / MySQL
- CI/CD Pipelines
- ERP Systems
`,

  "projects.txt": `
📂 Projects:
- My Website (this page)
- More coming soon...
`,
};

const HELP_TEXT = `
Available commands:
Tip: use 'sections' then 'cd <section>'
- help 
- whoami
- sections
- ls
- cat <file>
- cd <section>
- clear
`;

/* ===============================
   TERMINAL HELPERS
================================ */

function printCommand(command) {
  const line = document.createElement("div");
  line.className = "terminal-line";
  line.innerHTML = `
    <span class="terminal-prompt">➜</span>
    <span class="terminal-host">mr-dawkin@cloud</span>
    <span class="terminal-path">${cwd}</span>
    <span class="terminal-command">$ ${command}</span>
  `;
  terminalBody.appendChild(line);
  terminalBody.scrollTop = terminalBody.scrollHeight;
}

function printOutput(text) {
  const line = document.createElement("div");
  line.className = "terminal-output";
  line.textContent = text;
  terminalBody.appendChild(line);
  terminalBody.scrollTop = terminalBody.scrollHeight;
}

/* ===============================
   COMMAND EXECUTION
================================ */

function executeCommand(command) {
  const input = command.trim();
  if (!input) return;

  const args = input.split(" ");
  const base = args[0].toLowerCase();

  printCommand(command);

  /* CLEAR */
  if (base === "clear") {
    terminalBody.innerHTML = "";
    return;
  }

  /* HELP */
  if (base === "help") {
    HELP_TEXT.trim().split("\n").forEach(printOutput);
    return;
  }

  /* WHOAMI */
  if (base === "whoami") {
    printOutput("mr-dawkin@cloud");
    return;
  }

  /* SECTIONS */
  if (base === "sections") {
    SECTIONS.forEach(printOutput);
    return;
  }

  /* LS */
  if (base === "ls") {
    Object.keys(FILE_SYSTEM).forEach(printOutput);
    return;
  }

  /* CAT */
  if (base === "cat") {
    const file = args[1];
    if (!file) {
      printOutput("Usage: cat <file>");
      return;
    }

    if (FILE_SYSTEM[file]) {
      FILE_SYSTEM[file].trim().split("\n").forEach(printOutput);
    } else {
      printOutput(`File not found: ${file}`);
    }
    return;
  }

  /* CD */
  if (base === "cd") {
    const section = args[1];

    if (!section) {
      printOutput("Usage: cd <section>");
      return;
    }

    if (!SECTIONS.includes(section)) {
      printOutput(`Directory not found: ${section}`);
      return;
    }

    const target = document.getElementById(section);
    if (target) {
      cwd = `~/${section}`;
      printOutput(`Entering ${section}...`);
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      printOutput(`Section not found in DOM: ${section}`);
    }
    return;
  }

  /* UNKNOWN */
  printOutput(`Command not found: ${command}`);
}

/* ===============================
   TERMINAL INPUT
================================ */

terminalInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    executeCommand(terminalInput.value);
    terminalInput.value = "";
  }
});

/* ===============================
   WELCOME
================================ */

printOutput("Welcome to mr-dawkin@cloud");
printOutput("Type 'help' to see available commands.");

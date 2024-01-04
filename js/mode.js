const body = document.querySelector("body");
const darkBtn = document.getElementById("dark-btn");
const lightBtn = document.getElementById("light-btn");
// mode checker

const mode = localStorage.getItem("mode");
if (mode) {
  body.classList.add("dark-mode");
  darkBtn.classList.toggle("hidden");
  lightBtn.classList.toggle("hidden");
}

// toggle modes
const toggleMode = () => {
  body.classList.toggle("dark-mode");
  darkBtn.classList.toggle("hidden");
  lightBtn.classList.toggle("hidden");
};

// theme
darkBtn.addEventListener("click", () => {
  toggleMode();
  localStorage.setItem("mode", "dark-mode");
});

lightBtn.addEventListener("click", () => {
  toggleMode();
  localStorage.setItem("mode", "");
});

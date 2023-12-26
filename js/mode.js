const body = document.querySelector("body");
const darkBtn = document.getElementById("dark-btn");
const lightBtn = document.getElementById("light-btn");

// modeCheck
const check = localStorage.getItem("mode");
if (check) {
  body.classList.add("dark-mode");
  darkBtn.classList.toggle("hidden");
  lightBtn.classList.toggle("hidden");
}

// toggle night light
const toggle = () => {
  darkBtn.classList.toggle("hidden");
  lightBtn.classList.toggle("hidden");
  body.classList.toggle("dark-mode");
};

// dark button
darkBtn.addEventListener("click", () => {
  toggle();
  localStorage.setItem("mode", "dark");
});

// light button
lightBtn.addEventListener("click", () => {
  toggle();
  localStorage.setItem("mode", "");
});

// light dark mode changes done
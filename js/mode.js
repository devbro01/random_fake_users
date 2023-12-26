const body = document.querySelector("body");
const darkBtn = document.getElementById("dark-btn");
const lightBtn = document.getElementById("light-btn");

// modeCheck
const modeCheck = localStorage.getItem("mode");

if (modeCheck) {
  body.classList.add("dark-mode");
  darkBtn.classList.toggle("hidden");
  lightBtn.classList.toggle("hidden");
}

// toggle-theme-switch
const swtich_theme = () => {
  darkBtn.classList.toggle("hidden");
  lightBtn.classList.toggle("hidden");
  body.classList.toggle("dark-mode");
};
// dark
darkBtn.addEventListener("click", () => {
  swtich_theme();
  localStorage.setItem("mode", "dark-mode");
});
// light
lightBtn.addEventListener("click", () => {
  swtich_theme();
  localStorage.setItem("mode", "");
});

// dark ligt mode complated

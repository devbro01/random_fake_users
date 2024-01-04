// api
const API = "https://randomuser.me/api/?results=9";

// for loader
const overlay = document.getElementById("overlay");
function loading(data) {
  if (data) {
    overlay.classList.remove("hidden");
  } else {
    overlay.classList.add("hidden");
  }
}
// get data
const requist = async () => {
  loading(true);
  const req = await fetch(API);
  const data = await req.json();
  loading(false);
  return data;
};

requist().then((data) => {
  updateUI(data.results);
});

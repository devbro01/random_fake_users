// api
const API = "https://randomuser.me/api/?results=9";

// for loader
const overlay = document.getElementById("overlay");

const loaderToggle = (toggle) => {
  if (toggle) {
    overlay.classList.remove("hidden");
  } else {
    overlay.classList.add("hidden");
  }
};

// requist promise
const getData = (resurce) => {
  return new Promise((approve, reject) => {
    const requist = new XMLHttpRequest();

    requist.addEventListener("readystatechange", () => {
      if (requist.readyState < 4) {
        loaderToggle(true);
      } else if (requist.readyState === 4 && requist.status === 200) {
        const data = JSON.parse(requist.responseText);
        approve(data.results);
        loaderToggle(false);
      } else if (requist.readyState == 4) {
        reject("Qandaydir hatolik!!!");
        loaderToggle(false);
      }
    });

    requist.open("GET", resurce);
    requist.send();
  });
};

// load
const reload = () => {
  getData(API)
    .then((data) => {
      updateUL(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

document.addEventListener("DOMContentLoaded", reload);

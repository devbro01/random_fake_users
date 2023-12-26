// api
const API = "https://randomuser.me/api/?results=27";

// for loader
const overlay = document.getElementById("overlay");

// requist with promise
const getData = (resurce) => {
  return new Promise((approve, rejact) => {
    const requist = new XMLHttpRequest();
    requist.addEventListener("readystatechange", () => {
      if (requist.readyState < 4) {
        overlay.classList.remove("hidden");
      } else if (requist.readyState === 4 && requist.status === 200) {
        const data = JSON.parse(requist.responseText)
        approve(data.results);
        overlay.classList.add("hidden");
      } else if (requist.readyState === 4) {
        rejact("Qandaydir hatolik yuz berdi ) ;");
        overlay.classList.add("hidden");
      }
    });

    requist.open("GET", resurce);
    requist.send();
  });
};
const reload = () => {
  getData(API)
    .then((data) => {
      updateUL(data);
    })
    .catch((data) => {
      console.log(data);
    });
};

document.addEventListener("DOMContentLoaded", reload);
// requist and loader is complated
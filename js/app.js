const form = document.getElementById("form");
const formButton = document.getElementById("form__button");
const user = document.getElementById("user");
const deleteBtn = document.getElementById("delete__btn");
const clearBtn = document.getElementById("clear__button");

// refresh button
formButton.addEventListener("click", (e) => {
  e.preventDefault();
  requist().then((data) => {
    updateUI(data.results);
  });
});

// clear button
clearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  user.innerHTML = ``;
});

// live search
form["form__input"].addEventListener("input", (item) => {
  const inputValue = form["form__input"].value.toLowerCase();
  const name = document.querySelectorAll(".user__name");

  name.forEach((item) => {
    if (item.lastElementChild.textContent.toLowerCase().includes(inputValue)) {
      item.parentElement.classList.remove("hidden");
    } else {
      item.parentElement.classList.add("hidden");
    }
  });
});

// reload button
const updateUI = (data) => {
  user.innerHTML = ``;
  data.forEach((item) => {
    const { name, location, picture, dob, gender } = item;

    user.innerHTML += `
    <li class="user__item">
    <button id="delete__btn" class="user__delete--btn">
      <i class="fas fa-trash"></i>
    </button>
    <img
      class="user__img"
      alt="User photo"
      src="${picture.large}"
      width="100"
      height="100"
    />
    <div class="user__name">
      <span class="material-symbols-outlined">badge</span>
      <span>- ${name.title} ${name.first} ${name.last}</span>
    </div>
    <div class="user__year">
      <span class="material-symbols-outlined">cake</span>
      <span>- ${dob.age} years old.</span>
    </div>
    <div class="user__location">
      <span class="material-symbols-outlined">person_pin_circle</span>
      <span>- ${location.city}, ${location.state}</span>
    </div>
    <div class="user__gender">
      <span class="material-symbols-outlined">man</span>
      <span>- ${gender}</span>
    </div>
  </li>
    `;
  });
};

document.addEventListener("click", (e) => {
  if (e.target.classList[0] === "user__delete--btn") {
    e.target.parentElement.remove();
  }
});

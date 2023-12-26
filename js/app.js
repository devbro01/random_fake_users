const form = document.getElementById("form");
const formButton = document.getElementById("form__button");
const user = document.getElementById("user");
const deleteBtn = document.getElementById("delete__btn");
const clearBtn = document.getElementById("clear__button");

// reload button
formButton.addEventListener("click", (e) => {
  e.preventDefault();
  reload();
  clearBtn.classList.remove("hidden");
});

// clear button
clearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  user.innerHTML = "";
  clearBtn.classList.add("hidden");
});

// live search users by search form
form["form__input"].addEventListener("input", (data) => {
  const input_data = form["form__input"].value.toLowerCase();
  const name = document.querySelectorAll(".user__name");

  name.forEach((item) => {
    if (item.lastElementChild.textContent.toLowerCase().includes(input_data)) {
      item.parentElement.classList.remove("hidden");
    } else {
      item.parentElement.classList.add("hidden");
    }
  });
});

// display all datas
const updateUL = (data) => {
  user.innerHTML = "";
  data.forEach((item) => {
    const { gender, name, picture, location, dob } = item;

    user.innerHTML += `
    
    <li class="user__item">
    <button id="delete__btn" class="user__delete--btn">
      <i class="fas fa-trash"></i>
    </button>
    <img
      class="user__img"
      alt="User photo"
      src=${picture.large}
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
      <span>- ${location.city}, ${location.country}</span>
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

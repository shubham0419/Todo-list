let listEle = document.querySelector("#items");

let formEle = document.querySelector("form");
//------------------------- Add tasks -------------------------//
formEle.addEventListener("submit", (e) => {
  e.preventDefault();
  let newLi = document.createElement("li");
  newLi.className = "list-group-item";
  newLi.append(document.createTextNode(e.target[0].value));
  let btn = document.createElement("button");
  btn.append("X");
  btn.className = "btn btn-danger btn-sm float-right delete";
  newLi.append(btn);
  listEle.append(newLi);
});

//------------------------- Delete Tasks -------------------------//

listEle.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-danger")) {
    if (confirm("Delete item ?")) {
      listEle.removeChild(e.target.parentElement);
    }
  }
});

//------------------------- Search Filters -------------------------//

let searchEle = document.querySelector("input[id ='filter' ");

searchEle.addEventListener("keyup", (e) => {
  e.preventDefault();
  let text = e.target.value.toLowerCase();

  let items = document.querySelectorAll("li");

  Array.from(items).forEach((item) => {
    let searchText = item.childNodes[0].textContent.toLowerCase();
    if (searchText.indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

//------------------------- Theme Store & apply after load -------------------------//
let themes = document.querySelectorAll("input[type='radio']");

// Store Theme

function StoreTheme(theme) {
  localStorage.setItem("theme", theme);
}

// Apply theme

function ApplyTheme() {
  let prevTheme = localStorage.getItem("theme");

  themes.forEach((theme) => {
    if (theme.id === prevTheme) {
      theme.checked = true;
    }
  });
}

themes.forEach((theme) => {
  theme.addEventListener("click", (e) => {
    StoreTheme(e.target.id);
  });
});

document.onload = ApplyTheme();

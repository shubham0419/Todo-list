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
  btn.className = "btn list-btn btn-sm float-right delete";
  newLi.append(btn);
  listEle.append(newLi);
});

//------------------------- Delete Tasks -------------------------//

listEle.addEventListener("click", (e) => {
  if (e.target.classList.contains("list-btn")) {
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

// --------------------------------- Theme selector
const body = document.querySelector("body");

function reClass() {
  for (let i = 0; i < body.classList.length; i++){
    body.classList.remove(body.classList[i]);
  }
}

const theme = document.querySelector("#theme").children;

function removeactive() {
  for (let li = 0; li < 4; li++){
    theme[li].classList.remove("active");
  }
}


for (let li = 0; li < 4; li++){
  theme[li].addEventListener("click", (e) => {
    reClass();
    body.classList.add(e.target.id);
    removeactive();
    theme[li].classList.add("active");
  })
}

// -------------------------------- Drag Drop

const listItems = document.querySelectorAll("#items .list-group-item");

let dragSrcElement = null;

function dragStart(e){

    dragSrcElement = this

    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", this.innerHTML)
}

function dragEnter(){

    // console.log("dragEnter")
}


function dragOver(e){

    e.preventDefault();

    e.dataTransfer.dropEffect = "move";
    // console.log("dragOver")

}

function dragLeave(){

    // console.log("dragLeave")
}


function handleDrop(e){

        if(dragSrcElement !== this){

        dragSrcElement.innerHTML = this.innerHTML;

        this.innerHTML = e.dataTransfer.getData("text/html");
    }


    // console.log("drop")
}

listItems.forEach((item)=>{

    item.addEventListener("dragstart", dragStart)

    item.addEventListener("dragenter", dragEnter)

    item.addEventListener("dragover", dragOver)

    item.addEventListener("dragleave", dragLeave)

    item.addEventListener("drop", handleDrop)

})

//------------------------- Theme Store & apply after load -------------------------//
// let themes = document.querySelectorAll("input[type='radio']");

// -------------------------Store Theme

// function StoreTheme(theme) {
//   localStorage.setItem("theme", theme);
// }

// ------------------------Apply theme

// function ApplyTheme() {
//   let prevTheme = localStorage.getItem("theme");

//   themes.forEach((theme) => {
//     if (theme.id === prevTheme) {
//       theme.checked = true;
//     }
//   });
// }

// themes.forEach((theme) => {
//   theme.addEventListener("click", (e) => {
//     StoreTheme(e.target.id);
//   });
// });

// document.onload = ApplyTheme();

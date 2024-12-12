// getting all the elements here
const nameElement = document.querySelector(".name");

document.addEventListener("DOMContentLoaded", () => {
  let name = localStorage.getItem("name");
  if (name == null || name == undefined || name == "") {
    null;
  } else {
    nameElement.innerText = name;
  }
});

nameElement.addEventListener("click", () => {
  let name = prompt("Enter your name");
  if (name == null || name == undefined || name == "") {
    nameElement.innerText = "Name";
  }
  localStorage.setItem("name", name);
  nameElement.innerText = name;
});

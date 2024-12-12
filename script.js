// getting all the elements here
const nameElement = document.querySelector(".name");

const allLoadingFunctions = {
  getNameElement: function () {
    let name = localStorage.getItem("name");
    if (name == null || name == undefined || name == "") {
      null;
    } else {
      nameElement.innerText = name;
    }
  },
  settingEmpty : function(){
    const mainElement = document.querySelector('.main-section-two').innerHTML ;
    console.log(mainElement) ;
    if(mainElement == '' || mainElement == null || mainElement == undefined){
        mainElement.innerHTMl = '<h2 class="copy">your task list is empty</h2>' ;
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
    // console.log(this)
    allLoadingFunctions.getNameElement() ;
    allLoadingFunctions.settingEmpty() ;


});

nameElement.addEventListener("click", () => {
  let name = prompt("Enter your name");
  if (name == null || name == undefined || name == "") {
    nameElement.innerText = "Name";
  }
  localStorage.setItem("name", name);
  nameElement.innerText = name;
});

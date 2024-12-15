// getting all the elements here
const nameElement = document.querySelector(".name");
const addElemet = document.querySelector("#task-add");
const formElement = document.getElementById("form");
const noButton = document.getElementById("no");
const emptyElement = document.querySelector("#empty");
const timeElement = document.querySelector("#time");

const allLoadingFunctions = {
  getNameElement: function () {
    let name = localStorage.getItem("name");
    if (name == null || name == undefined || name == "") {
      null;
    } else {
      nameElement.innerText = name;
    }
  },
  settingDate: function () {
    // block of code
    const date = new Date();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let month = months[date.getMonth()];
    let dateOfMonth = date.getDate();
    let fullYear = date.getFullYear();
    let time = `${month} ${dateOfMonth} , ${fullYear}`;
    // console.log(timeElement);
    timeElement.innerText = time;
  },
  getTasks : function(){
    let noOfTasks = localStorage.getItem('noOfTasks') ;
    if(!noOfTasks ){
      localStorage.setItem('noOfTasks' , 0) ;
      document.querySelector('#tasks').innerText = localStorage.getItem('noOfTasks') ;
      return ;
    }
    document.querySelector('#tasks').innerText = localStorage.getItem('noOfTasks') ;

    if(Number(noOfTasks) > 0){
      for(let i = 1 ; i <= Number(noOfTasks)  ; i++){
        let jsonString = localStorage.getItem(`task-${i}`) ;
        const {taskName , description , priority , deadline} = JSON.parse(jsonString) ;
        createTaskBox(taskName , description , priority , deadline) ;
      }
    }

  }
};

// page navigation
const pageNavigation = {
  homePage: "My Current",
  pendingTaskPage: "Pending Task",
  completedTaskPage: "Completed Task",
};

// task adding
addElemet.addEventListener("click", () => {
  formElement.classList.remove("none");
  emptyElement.classList.add("none");
});

// Form submission
formElement.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission

  const taskName = document.querySelector("#task-name").value.trim();
  const description = document.querySelector("#description").value.trim();
  const priority = document.querySelector("#priority").value;
  const deadline = document.querySelector("#deadline").value;

  // Form validation
  if (!taskName || !description || !priority || !deadline) {
    alert("Please fill all the fields");
    return;
  }
  // create tax box
  createTaskBox(taskName , description , priority , deadline) ;


  // Hide the form
  formElement.classList.add("none");

  // Clear form fields
  formElement.reset();

  // setting tasks in local storage
  setTasks(taskName , description , priority , deadline) ;
  
});

function createTaskBox(taskName , description , priority , deadline) {
    // Create task box
    const taskBox = document.createElement("article");
    taskBox.classList.add("task-box");
  
    taskBox.innerHTML = `
      <article id="task-box-one">
        <div class="circle"></div>
        <div class="title">${taskName}</div>
        <div class="edit-button display-center">
          <i class="ri-edit-line"></i>
        </div>
      </article>
      <article class="task-box-two">
        <div>${description}</div>
        <p>Priority: <span>${priority}</span></p>
        <p>Deadline: <span>${deadline}</span></p>
      </article>
      <button class="check-button">
        <i class="ri-check-double-line ri-lg"></i>
      </button>
    `;
  
    // Append task box to the main section
    document.querySelector(".main-section-two").appendChild(taskBox);
}

function setTasks(taskName , description , priority , deadline){
  let tasks = {
    taskName : taskName ,
    description : description ,
    priority : priority ,
    deadline : deadline
  }
  
  localStorage.setItem('noOfTasks' , Number(localStorage.getItem('noOfTasks')) + 1) ;
  localStorage.setItem(`task-${Number(localStorage.getItem('noOfTasks'))}` , JSON.stringify(tasks)) ; 
}

// Handle "No" button
noButton.addEventListener("click", () => {
  formElement.classList.add("none");
});


document.addEventListener("DOMContentLoaded", () => {
  allLoadingFunctions.getNameElement();
  allLoadingFunctions.settingDate();
  allLoadingFunctions.getTasks() ;
});

nameElement.addEventListener("click", () => {
  let name = prompt("Enter your name");
  if (name == null || name == undefined || name == "") {
    nameElement.innerText = "Name";
  }
  localStorage.setItem("name", name);
  nameElement.innerText = name;
});

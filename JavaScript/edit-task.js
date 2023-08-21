const editTaskPopup = document.getElementById("edit-task");
const mainEditHeading = document.querySelector(".main-edit-heading");
const editDescription = document.getElementById("edit-description");
const editButton = document.getElementById("edit-task-btn");
const editTaskName = document.getElementById("edit-task-name");
const editTaskDate = document.getElementById("edit-task-date");
const editPriority = document.getElementById("edit-priority");
const editPopupCloseBtn = document.getElementById("edit-close-btn");

const highEditPriority = document.getElementById("edit-high");
const mediumEditPriority = document.getElementById("edit-medium");
const lowEditPriority = document.getElementById("edit-low");

let newPriority = "";

const closeEditPopup = () => {
  editTaskPopup.classList.add("display");
  editDescription.value = "";
};

function populateEditTask(element) {
    editTaskName.value = element.querySelector(".task-name").textContent;
    editTaskDate.value = element.querySelector(".due-date").value;
    editDescription.value = element.querySelector(".description").textContent;
    
    const elementPriority = element.querySelector(".priority-type");
  //Check the current tasks priority and assigns that within the edit screen
  if (elementPriority.textContent === "High") {
    highEditPriority.classList.remove("display");
    lowEditPriority.classList.add("display");
    mediumEditPriority.classList.add("display");
  } else if (elementPriority.textContent === "Medium") {
    highEditPriority.classList.add("display");
    lowEditPriority.classList.add("display");
    mediumEditPriority.classList.remove("display");
  } else {
    highEditPriority.classList.add("display");
    lowEditPriority.classList.remove("display");
    mediumEditPriority.classList.add("display");
  }

  newPriority = elementPriority.textContent;
}

function changePriority(e) {
    // Allows to expand to showcase all the available priorities
    if (!editTaskPopup.classList.contains("display")) {
      let setPriority = e.target.id;
      switch (setPriority) {
        case "edit-high":
          mediumEditPriority.classList.toggle("display");
          lowEditPriority.classList.toggle("display");
          newPriority = "High";
          break;

        case "edit-medium":
          highEditPriority.classList.toggle("display");
          lowEditPriority.classList.toggle("display");
          newPriority = "Medium";
          break;

        case "edit-low":
          mediumEditPriority.classList.toggle("display");
          highEditPriority.classList.toggle("display");
          newPriority = "Low";
          break;

        default:
          break;
      }
    }
  }

//Function below will edit the main task with the new values
function editedContent(item) {
    if(editTaskName.value!=""){
        console.log(editTaskName.value);

    }
    else{
        mainEditHeading.textContent="Task name cannot be empty!";
        mainEditHeading.style.color="red";
        editTaskName.style.border="1px solid red";

        setTimeout(()=>{
            mainEditHeading.textContent="Add New Task";
            mainEditHeading.style.color="#fbbf24";
        },3000)
    }
}

export {
  editButton,
  editTaskPopup,
  editPopupCloseBtn,
  editPriority,
  closeEditPopup,
  populateEditTask,
  changePriority,
  editedContent
};
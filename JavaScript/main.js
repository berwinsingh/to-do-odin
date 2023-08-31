import { createTaskBtn, addNewTask,closePopup,onClickPopupView,popupClose,createTask,prioritySelect,choosePriority,taskList,newTaskPopup} from "./new_task.js";
import { editButton, editTaskPopup, editPopupCloseBtn, closeEditPopup, populateEditTask, editPriority, changePriority, editedContent } from "./edit-task.js";
import { loadTasks, saveTaskToStorage } from "./save.js";

const navigateToNotes = document.getElementById("notes-btn");

//Creating new task functionality
addNewTask.addEventListener("click", onClickPopupView);
closePopup.addEventListener("click", popupClose);
createTaskBtn.addEventListener("click", createTask);
choosePriority.addEventListener("click",prioritySelect);

taskList.addEventListener("click",(event)=>{
  let closestTaskName = event.target.closest(".task");

  if(event.target.classList.contains('completed') && event.target.getAttribute('name') === 'ellipse-outline'){
    event.target.setAttribute('name','checkmark-circle');
    event.target.style.color = 'green';
    closestTaskName.querySelector("h3").style.textDecoration = "line-through";
    saveTaskToStorage();
  }

  else if(event.target.classList.contains('completed') && event.target.getAttribute('name')==='checkmark-circle'){
    event.target.setAttribute('name','ellipse-outline');
    event.target.style.color = 'black';
    closestTaskName.querySelector("h3").style.textDecoration = "none";
    saveTaskToStorage();
  }

  if(event.target.classList.contains('delete-task')){
    const itemToDelete = event.target.closest('.task');
    itemToDelete.remove();
    saveTaskToStorage();
  }

  //Automatically populates the edit task field
  if(event.target.classList.contains('task')){
    editTaskPopup.classList.remove('display');
    newTaskPopup.classList.add('display');
    const chosenTask = event.target.closest('.task');
    populateEditTask(chosenTask);
  }
});

//Editing existing task functionality
editPopupCloseBtn.addEventListener('click',closeEditPopup);
editPriority.addEventListener('click',changePriority);
editButton.addEventListener("click",editedContent); //Applies the edits that have been made by us

//Notetaking Page Navigation Functionality
navigateToNotes.addEventListener("click",()=>{
  window.location.href="../src/notes.html";
});

loadTasks();
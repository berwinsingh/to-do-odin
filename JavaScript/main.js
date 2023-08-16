import {
  createTaskBtn,
  addNewTask,
  closePopup,
  onClickPopupView,
  popupClose,
  createTask,
  prioritySelect,
  choosePriority,
  taskList
} from "./new_task.js";

import { editButton, editTaskPopup, editPopupCloseBtn, closeEditPopup } from "./edit-task.js";


//Creating new task functionality
addNewTask.addEventListener("click", onClickPopupView);
closePopup.addEventListener("click", popupClose);
createTaskBtn.addEventListener("click", createTask);
choosePriority.addEventListener("click",prioritySelect);

taskList.addEventListener("click",(event)=>{
  if(event.target.classList.contains('completed') && event.target.getAttribute('name') === 'ellipse-outline'){
    event.target.setAttribute('name','checkmark-circle');
    event.target.style.color = 'green';
  }

  else if(event.target.classList.contains('completed') && event.target.getAttribute('name')==='checkmark-circle'){
    event.target.setAttribute('name','ellipse-outline');
    event.target.style.color = 'black';
  }

  if(event.target.classList.contains('delete-task')){
    event.target.closest('.task').remove();
  }

  if(event.target.classList.contains('task')){
    editTaskPopup.classList.remove('display');
  }
});

//Editing existing task functionality
editPopupCloseBtn.addEventListener('click',closeEditPopup);
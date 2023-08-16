import { taskList, prioritySelect } from "./new_task.js";

const editTaskPopup = document.getElementById("edit-task");
const mainEditHeading = document.querySelector('.main-edit-heading');
const addDescription = document.getElementById("add-description");
const editButton = document.getElementById("edit-task-btn");
const editTaskName = document.getElementById("edit-task-name");
const editTaskDate = document.getElementById("edit-task-date");
const editPriority = document.getElementById("edit-priority");
const editPopupCloseBtn = document.getElementById("edit-close-btn");

const closeEditPopup = ()=>{
    editTaskPopup.classList.add('display');
};

export {editButton, editTaskPopup, editPopupCloseBtn,closeEditPopup}
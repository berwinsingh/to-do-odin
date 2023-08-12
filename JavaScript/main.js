import {
  createTaskBtn,
  addNewTask,
  closePopup,
  onClickPopupView,
  popupClose,
  createTask,
  prioritySelect,
  choosePriority
} from "./new_task.js";

addNewTask.addEventListener("click", onClickPopupView);
closePopup.addEventListener("click", popupClose);
createTaskBtn.addEventListener("click", createTask);
choosePriority.addEventListener("click",prioritySelect);
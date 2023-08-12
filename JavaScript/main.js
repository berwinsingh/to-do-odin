import { createTaskBtn,addNewTask,closePopup,onClickPopupView,popupClose, createTask } from "./new_task.js";

addNewTask.addEventListener("click",onClickPopupView);
closePopup.addEventListener("click",popupClose);
createTaskBtn.addEventListener("click",createTask);
const addNewTask = document.getElementById("new-btn"); //Plus icon that will reveal the popup when clicked
const newTaskPopup = document.getElementById("add-new-task"); //This will be shown or hidden on the click of the add btn
const taskName = document.getElementById("task-name");
const createTaskBtn = document.getElementById("create-task-btn");
const taskDate = document.getElementById("task-date");
const closePopup = document.getElementById("close-btn");

//The various priority setup's
const lowPriority = document.getElementById("low;")
const mediumPriority = document.getElementById("medium");
const highPriority = document.getElementById("high");


//Factory function to store new tasks that have been created
const taskDetails = (task, date="", priority='low')=>{
    return{task, date, priority};
};

function onClickPopupView(){
    newTaskPopup.classList.remove("display");
};

function popupClose(){
    newTaskPopup.classList.add("display");
}

function createTask(){
    // console.log(`Task Created`);
    const newTask = taskDetails(taskName.value,taskDate.value);
    console.log(newTask);
};


export{
    createTaskBtn,
    addNewTask,
    closePopup,
    onClickPopupView,
    popupClose,
    createTask
}
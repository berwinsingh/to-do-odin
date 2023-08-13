const addNewTask = document.getElementById("new-btn"); //Plus icon that will reveal the popup when clicked
const newTaskPopup = document.getElementById("add-new-task"); //This will be shown or hidden on the click of the add btn
const taskName = document.getElementById("task-name");
const createTaskBtn = document.getElementById("create-task-btn");
const taskDate = document.getElementById("task-date");
const closePopup = document.getElementById("close-btn");
const mainHeading = document.querySelector(".main-new-heading");

const taskList = document.getElementById("tasks-list");

//The various priority setup's
const choosePriority = document.getElementById('choose-priority');
const lowPriority = document.getElementById("low")
const mediumPriority = document.getElementById("medium");
const highPriority = document.getElementById("high");

let currentPriority= lowPriority; //Holds the priority level based on the users choice can be changed dynamically

//Factory function to store new tasks that have been created
const taskDetails = (task, date="", priority=lowPriority.textContent)=>{
    return{task, date, priority};
};

function onClickPopupView(){
    newTaskPopup.classList.remove("display");
};

function popupClose(){
    newTaskPopup.classList.add("display");
}

const prioritySelect = (event)=>{
    const targetId = event.target.id;
    switch (targetId){
        case 'low':
            mediumPriority.classList.toggle('display');
            highPriority.classList.toggle('display');
            currentPriority = lowPriority;
            break;

        case 'medium':
            lowPriority.classList.toggle('display');
            highPriority.classList.toggle('display');
            currentPriority = mediumPriority;
            break;
        
        case 'high':
            lowPriority.classList.toggle('display');
            mediumPriority.classList.toggle('display');
            currentPriority=highPriority;
            break;

        default:
            break;
    }
}

const newTaskTemplate = document.getElementById("new-task");

function createTask(){
    if(taskName.value===""){
        mainHeading.textContent="Please add a task name!"
        mainHeading.style.color = 'red';
        
        setTimeout(()=>{
            mainHeading.textContent="Add new task"
            mainHeading.style.color = '#fbbf24';
        },3000)
    }

    else{
        const newTask = taskDetails(taskName.value,taskDate.value,currentPriority.textContent); //Storing all the task details

        const newTaskCreate = newTaskTemplate.content.cloneNode(true);
        let theTask = newTaskCreate.querySelector(".task");
        let whatToDoElement = theTask.querySelector('.task-name');
        let priorityTypeElement = theTask.querySelector('.priority-type');
        let dueDateElement = theTask.querySelector('.due-date');

        if (whatToDoElement) {
            whatToDoElement.textContent = newTask.task;
        }
        if (priorityTypeElement) {
            priorityTypeElement.textContent = newTask.priority;
            
            //Condition that add the appropriate background color based on the priority selected
            if(priorityTypeElement.textContent==='High'){
                priorityTypeElement.style.backgroundColor = '#dc2626';
            }
            else if(priorityTypeElement.textContent==='Medium'){
                priorityTypeElement.style.backgroundColor = '#ea580c';
            }
            else if(priorityTypeElement.textContent==='Low'){
                priorityTypeElement.style.backgroundColor = '#65a30d';
            }
        }
        if (dueDateElement) {
            dueDateElement.value = newTask.date;
        }

        taskList.appendChild(theTask);
        newTaskPopup.classList.add('display');

        //Resetting the input fields value i.e., Task Name and Task Date
        taskName.value="";
        taskDate.value="";
    }
};

export{
    createTaskBtn,
    addNewTask,
    closePopup,
    choosePriority,
    onClickPopupView,
    popupClose,
    createTask,
    prioritySelect,
    taskList,
}
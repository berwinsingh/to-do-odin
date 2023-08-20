const editTaskPopup = document.getElementById("edit-task");
const mainEditHeading = document.querySelector('.main-edit-heading');
const editDescription = document.getElementById("edit-description");
const editButton = document.getElementById("edit-task-btn");
const editTaskName = document.getElementById("edit-task-name");
const editTaskDate = document.getElementById("edit-task-date");
const editPriority = document.getElementById("edit-priority");
const editPopupCloseBtn = document.getElementById("edit-close-btn");

const highEditPriority = document.getElementById('edit-high');
const mediumEditPriority = document.getElementById('edit-medium');
const lowEditPriority = document.getElementById('edit-low');

let newPriority = 'Low';

const closeEditPopup = ()=>{
    editTaskPopup.classList.add('display');
    editDescription.value = "";
};


function populateEditTask(element){
    const elementPriority = element.querySelector('.priority-type')
    
    editTaskName.value = element.querySelector('.task-name').textContent;
    editTaskDate.value = element.querySelector('.due-date').value;
    editDescription.value = element.querySelector(".description").textContent;

    //Check the current tasks priority and assigns that within the edit screen
    if(elementPriority.textContent==='High'){
        highEditPriority.classList.remove("display");
        lowEditPriority.classList.add("display");
        mediumEditPriority.classList.add("display");
        // editTaskPriority.style.background="#dc2626";
        // editTaskPriority.textContent="High";
    }
    else if(elementPriority.textContent==="Medium"){
        highEditPriority.classList.add("display");
        lowEditPriority.classList.add("display");
        mediumEditPriority.classList.remove("display");
        // editTaskPriority.style.background='#ea580c';
        // editTaskPriority.textContent="Medium";
    }
    else{
        highEditPriority.classList.add("display");
        lowEditPriority.classList.remove("display");
        mediumEditPriority.classList.add("display");
        // editTaskPriority.style.background='#16a34a';
        // editTaskPriority.textContent="Low";
    }

    newPriority = elementPriority.textContent;
}


function changePriority(){ //Allows to expand to showcase all the available priorities
    if(!editTaskPopup.classList.contains('display')){

        switch (newPriority) {
            case "High":
                mediumEditPriority.classList.remove("display");
                lowEditPriority.classList.remove("display");
                newPriority=highEditPriority;
                break;
            case "Medium":
                highEditPriority.classList.remove("display");
                lowEditPriority.classList.remove("display");
                newPriority=mediumEditPriority;
            break;
            case "Low":
                mediumEditPriority.classList.remove("display");
                highEditPriority.classList.remove("display");
                newPriority=lowEditPriority;
                break;
            default:
                break;
        }
    }
}

const assignPriority = ()=>{

}

//Function below will edit the main task with the new values
function editedContent(){

}

export {editButton, editTaskPopup, editPopupCloseBtn, editPriority, closeEditPopup, populateEditTask, editedContent, changePriority}
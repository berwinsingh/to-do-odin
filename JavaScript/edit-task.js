const editTaskPopup = document.getElementById("edit-task");
const mainEditHeading = document.querySelector('.main-edit-heading');
const addDescription = document.getElementById("add-description");
const editButton = document.getElementById("edit-task-btn");
const editTaskName = document.getElementById("edit-task-name");
const editTaskDate = document.getElementById("edit-task-date");
const editPriority = document.getElementById("edit-priority");
const editPopupCloseBtn = document.getElementById("edit-close-btn");

const lowEditPriority = document.getElementById('edit-low');
const mediumEditPriority = document.getElementById('edit-medium');
const highEditPriority = document.getElementById('edit-high');
let newPriority = 'Low';

const closeEditPopup = ()=>{
    editTaskPopup.classList.add('display');
    addDescription.value = "";
};

function populateEditTask(element){
    const elementPriority = element.querySelector('.priority-type')

    editTaskName.value = element.querySelector('.task-name').textContent;
    editTaskDate.value = element.querySelector('.due-date').value;

    //Check the current tasks priority and assigns that within the edit screen
    if(elementPriority.textContent==='High'){
        highEditPriority.classList.remove('display');
        lowEditPriority.classList.add('display');
        mediumEditPriority.classList.add('display');
    }
    else if(elementPriority.textContent==="Medium"){
        mediumEditPriority.classList.remove('display');
        lowEditPriority.classList.add('display');
        highEditPriority.classList.add('display');
    }
    else{
        lowEditPriority.classList.remove('display');
        mediumEditPriority.classList.add('display');
        highEditPriority.classList.add('display');
    }

    newPriority = elementPriority.textContent;
    // console.log(newPriority);
    if(!editTaskPopup.classList.contains('display')){
        // console.log(true);
        
    }
}


// function changePriority(){
// }

//Function below will edit the main task with the new values
function editedContent(){

}

export {editButton, editTaskPopup, editPopupCloseBtn, closeEditPopup, populateEditTask, editedContent}
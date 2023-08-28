const editNotePopup = document.getElementById("edit-created-note");
const editNoteTextArea = document.getElementById("edit-note-area");
const editHeading = document.getElementById("edit-note-heading");
const editNoteBtn = document.getElementById("edit-note-btn");

let currentSelection ="";

const fillEditValues = (item)=>{
        editNotePopup.classList.remove("display");
        editNoteTextArea.value = item.querySelector("p").textContent;

        currentSelection = item;
}

const setEditValues = ()=>{
    if(editNoteTextArea.value===""){
        editHeading.textContent="Please add a Note";
        editHeading.style.color="red";
        editNoteTextArea.style.border="1px solid red"
    
        setTimeout(()=>{
            editHeading.textContent="Edit Note";
            editHeading.style.color="#fbbf24";
            editNoteTextArea.style.border="1px solid black"
        },3000);
    }
    else{
        currentSelection.querySelector("p").textContent = editNoteTextArea.value;
        editNotePopup.classList.add("display");
        editNoteTextArea.value="";
    }
}

const closeEditPopup = ()=>{
    editNotePopup.classList.add("display");
}

const deleteNote = ()=>{
    currentSelection.remove();
    editNoteTextArea.value="";
    editNotePopup.classList.add("display");
}

export{
    fillEditValues,
    closeEditPopup,
    setEditValues,
    editNotePopup,
    editNoteBtn,
    deleteNote
}
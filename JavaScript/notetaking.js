import { createNewNote, hidePopup, showNotePopup, allNotesContainer } from "./new-note.js";
import { closeEditPopup, editNoteBtn, fillEditValues, setEditValues } from "./edit-note.js";

const allTasksBtn = document.getElementById("all-tasks");
const appHeading = document.querySelector("h1");

const homePageLink = "../src/index.html";

allTasksBtn.addEventListener("click",()=>{
    window.location.href = homePageLink;
});

appHeading.addEventListener("click",()=>{
    window.location.href = homePageLink;
})

//New note functionality
const createNoteBtn = document.getElementById("new-note-btn");
const closeNewNotePopup = document.getElementById("close-new-note-popup");
const addNoteToView = document.getElementById("create-note-btn");

createNoteBtn.addEventListener("click", showNotePopup);
closeNewNotePopup.addEventListener("click", hidePopup);
addNoteToView.addEventListener("click",createNewNote);

//Edit note functionality
const closeEditPopupIcon = document.getElementById("close-edit-note-popup");

allNotesContainer.addEventListener("click",(event)=>{
    if(event.target.classList.contains("note-details")){
        const currentNote = event.target.closest(".my-note");
        fillEditValues(currentNote);
    }
})

closeEditPopupIcon.addEventListener("click",closeEditPopup);
editNoteBtn.addEventListener("click",setEditValues);
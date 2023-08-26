import { createNewNote, hidePopup, showNotePopup } from "./new-note.js";

const allTasksBtn = document.getElementById("all-tasks");
const appHeading = document.querySelector("h1");

const homePageLink = "../src/index.html";

allTasksBtn.addEventListener("click",()=>{
    window.location.href = homePageLink;
});

appHeading.addEventListener("click",()=>{
    window.location.href = homePageLink;
})

//Adding new note to the page
const createNoteBtn = document.getElementById("new-note-btn");
const closeNewNotePopup = document.getElementById("close-new-note-popup");
const addNoteToView = document.getElementById("create-note-btn");

createNoteBtn.addEventListener("click", showNotePopup);
closeNewNotePopup.addEventListener("click", hidePopup);
addNoteToView.addEventListener("click",createNewNote);
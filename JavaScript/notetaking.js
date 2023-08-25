import { createNewNote, showNotePopup } from "./new-note.js";

const allTasksBtn = document.getElementById("all-tasks");
const appHeading = document.querySelector("h1");
const allNotesContainer = document.getElementById("all-notes"); //Container that will contain all the new notes that are added
const createNoteBtn = document.getElementById("new-note-btn");

const homePageLink = "../src/index.html";

allTasksBtn.addEventListener("click",()=>{
    window.location.href = homePageLink;
});

appHeading.addEventListener("click",()=>{
    window.location.href = homePageLink;
})

//Adding new note to the page
createNoteBtn.addEventListener("click", showNotePopup);
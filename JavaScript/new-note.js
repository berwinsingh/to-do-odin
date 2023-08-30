import { editNotePopup } from "./edit-note.js";

const newNotePopup = document.getElementById("create-new-note");
const newNoteInfo = document.getElementById("create-note-area");
const newNoteHeading = document.getElementById("new-note-heading");
const allNotesContainer = document.getElementById("all-notes"); //Container that will contain all the new notes that are added

const randNoteColors = ["#dc2626b6","#dcaf26d6","#8f0edacf","#0ebfdacf"];

const newNoteTemplate = document.getElementById("new-note");

const createNewNote = ()=>{
    if(newNoteInfo.value===""){
        newNoteHeading.textContent= "Please enter a note to continue!";
        newNoteHeading.style.color = "red";
        newNoteInfo.style.border = "1px solid red";

        setTimeout(()=>{
            newNoteHeading.textContent="Add New Note!";
            newNoteHeading.style.color = "#fbbf24";
            newNoteInfo.style.border="1px solid black";
        },3000);
    }
    else{
        const newNote = newNoteTemplate.content.cloneNode(true);
        let myNoteFrame = newNote.querySelector(".my-note");
        let noteValue = myNoteFrame.querySelector("p");
        noteValue.textContent = newNoteInfo.value;
    
        let randomBgColor = randNoteColors[Math.floor(Math.random(randNoteColors)*randNoteColors.length)];
        myNoteFrame.style.backgroundColor = randomBgColor;
    
        allNotesContainer.append(myNoteFrame);
        // saveNote(myNoteFrame);
        newNoteInfo.value="";
        newNotePopup.classList.add("display");
    }
}

const showNotePopup = ()=>{
    newNotePopup.classList.remove("display");
    editNotePopup.classList.add("display");
}

const hidePopup = ()=>{
    newNotePopup.classList.add("display");
}

export{
    createNewNote,
    showNotePopup,
    hidePopup,
    allNotesContainer
}
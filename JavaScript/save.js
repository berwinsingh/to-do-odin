import { allNotesContainer } from "./new-note.js";
import { taskList } from "./new_task.js";

const saveTaskToStorage = ()=>{
    localStorage.setItem("task",taskList.innerHTML);
}

const loadTasks = ()=>{
   taskList.innerHTML = localStorage.getItem("task", taskList.innerHTML);
}

const saveNoteToStorage = ()=>{
    localStorage.setItem("notes",allNotesContainer.innerHTML)
}

const loadNotes = ()=>{
    allNotesContainer.innerHTML = localStorage.getItem("notes");
}

export{
    saveTaskToStorage,
    loadTasks,
    saveNoteToStorage,
    loadNotes
}
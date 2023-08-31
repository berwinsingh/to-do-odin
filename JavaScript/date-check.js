import { mainEditHeading } from "./edit-task.js";

export default function checkDateValidity(item) {
  const currentDate = new Date();
  const selectedDate = new Date(item);
  // console.log(selectedDate);
  
  if (selectedDate >= currentDate) {
    return true;
  }
  else{
    mainEditHeading.textContent = "Please enter a valid date!"
    mainEditHeading.style.color = "red";

          setTimeout(()=>{
            mainEditHeading.textContent="Edit Task";
            mainEditHeading.style.color="#fbbf24";
        },3000)
  }
  return false;
}

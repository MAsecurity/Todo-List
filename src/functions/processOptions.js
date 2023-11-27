import { addTodo } from "./logic/addTodo";
function processOptions(){
  const submitBtn = document.querySelector(".submitbtn");
  const titleValue = document.querySelector("#title");
  const descriptionValue = document.querySelector("#description");
  const dueDateValue = document.querySelector("#date");
  const lowPriorityValue = document.querySelector("#low");
  const mediumPriorityValue = document.querySelector("#medium");
  const highPriorityValue = document.querySelector("#high");
  let priorityChoice;
  let status = "Not in progress";
  let project = "default";
  submitBtn.addEventListener("click", () => {
    event.preventDefault();
    if (titleValue.value !== '' && descriptionValue.value !== '' && dueDateValue.value !== ''){
      dialog.close()
      if (lowPriorityValue.checked){
        priorityChoice = lowPriorityValue.value;  
      }else if(mediumPriorityValue.checked){
        priorityChoice = mediumPriorityValue.value;
      }else if (highPriorityValue.checked){
        priorityChoice = highPriorityValue.value;
      }
    }
    addTodo(titleValue.value, descriptionValue.value, dueDateValue.value, priorityChoice,status,project);
  });
};
export {processOptions};
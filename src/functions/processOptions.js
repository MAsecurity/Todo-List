import { addTodo } from "./logic/addTodo";
function processOptions(){
  const submitBtn = document.querySelector(".submitbtn");
  const titleValue = document.querySelector("#title");
  const descriptionValue = document.querySelector("#description");
  const dueDateValue = document.querySelector("#date");
  const lowPriorityValue = document.querySelector("#low");
  const mediumPriorityValue = document.querySelector("#medium");
  const highPriorityValue = document.querySelector("#high");
  const projectValue = document.querySelector("#project");
  const dialogEl = document.querySelector("#dialog");
  let priorityChoice;
  let status = "Not in progress";
  let project = "default";
  submitBtn.addEventListener("click", () => {
    event.preventDefault();
    if (titleValue.value !== '' && descriptionValue.value !== '' && dueDateValue.value !== ''){
      dialogEl.close()
      if (lowPriorityValue.checked){
        priorityChoice = lowPriorityValue.value;  
      }else if(mediumPriorityValue.checked){
        priorityChoice = mediumPriorityValue.value;
      }else if (highPriorityValue.checked){
        priorityChoice = highPriorityValue.value;
      }
      if (projectValue.value !== ''){
        addTodo(titleValue.value, descriptionValue.value, dueDateValue.value, priorityChoice,status,projectValue.value.trim());
      }else{
        addTodo(titleValue.value, descriptionValue.value, dueDateValue.value, priorityChoice,status,project);
      }
    }
  });
};
export {processOptions};
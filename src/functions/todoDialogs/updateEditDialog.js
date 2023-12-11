import { todoArray } from "../logic/addTodo";
import { reset } from "../reset";
function updateTodo(index){
  const submitBtn = document.querySelector(".submitbtn");
  const titleValue = document.querySelector("#title");
  const descriptionValue = document.querySelector("#description");
  const dueDateValue = document.querySelector("#date");
  const lowPriorityValue = document.querySelector("#low");
  const mediumPriorityValue = document.querySelector("#medium");
  const highPriorityValue = document.querySelector("#high");
  const projectValue = document.querySelector("#project");
  const dialogEl = document.querySelector("#dialog");
  const notInProgressValue = document.querySelector("#not-in-progress");
  const progressValue = document.querySelector("#progress");
  const completedValue = document.querySelector("#completed");
  let priorityChoice;
  let status;
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
      if (notInProgressValue.checked){
        status = "Not in progress";
      }else if (progressValue.checked){
        status = "In progress";
      }else if (completedValue.checked){
        status = "Completed";
      }
      if (projectValue.value !== ''){
        todoArray[index].setTitle(titleValue.value); 
        todoArray[index].setDescription(descriptionValue.value);
        todoArray[index].setDueDate(dueDateValue.value); 
        todoArray[index].setPriority(priorityChoice);
        todoArray[index].setStatus(status);
        todoArray[index].setProject(projectValue.value);
        reset();
      }else{
        todoArray[index].setTitle(titleValue.value); 
        todoArray[index].setDescription(descriptionValue.value);
        todoArray[index].setDueDate(dueDateValue.value); 
        todoArray[index].setPriority(priorityChoice);
        todoArray[index].setStatus(status);
        todoArray[index].setProject(project);
        reset();
      }
    }
  });
};
export {updateTodo}
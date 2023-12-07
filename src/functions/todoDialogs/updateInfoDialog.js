import { todoArray } from "../logic/addTodo";
function updateInfoDialog(index){
  const titleProperties = document.querySelector(".title-properties");
  titleProperties.textContent = `${todoArray[index].getTitle()}`;
  const descriptionProperties = document.querySelector(".description-properties");
  descriptionProperties.textContent = `${todoArray[index].getDescription()}`;
  const dueDateProperties = document.querySelector(".dueDate-properties");
  dueDateProperties.textContent = `${todoArray[index].getDueDate()}`;
  const priorityProperties = document.querySelector(".priority-properties");
  priorityProperties.textContent = `${todoArray[index].getPriority()}`;
  const statusProperties = document.querySelector(".status-properties");
  statusProperties.textContent = `${todoArray[index].getStatus()}`;
  const projectProperties = document.querySelector(".project-properties");
  projectProperties.textContent = `${todoArray[index].getProject()}`;
}
export {updateInfoDialog}
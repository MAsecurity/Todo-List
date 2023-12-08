import { showInfoDialog } from "./showInfoDialog";
import { todoArray } from "../logic/addTodo";
import { updateInfoDialog } from "./updateInfoDialog";
import { closeInfoDialog } from "./closeInfoDialog";
function renderInfoDialog(index){
  const content = document.querySelector(".main-changing-content");
  const parentContainer = document.createElement("div");
  parentContainer.classList.add("dialog-container");
  const dialogProperties = document.createElement("dialog");
  dialogProperties.setAttribute("id", "dialogProperties");
  dialogProperties.setAttribute("index", `${index}`)
  const headingElement = document.createElement("div");
  headingElement.textContent = "Properties";
  headingElement.style.cssText = "font-weight:bold; font-size:30px; text-decoration:underline; text-align:center;";
  const propertyContainer = document.createElement("div");
  propertyContainer.classList.add("property-container");
  // Title
  const divForTitleProp = document.createElement("div");
  divForTitleProp.style.cssText = "display: flex; gap: 5px; width: 100%; justify-content:center;"
  const titleProp = document.createElement("div");
  titleProp.style.cssText = "font-weight: bold; font-size:20px;";
  titleProp.textContent = "Title: ";
  const titlePropValue = document.createElement("div");
  titlePropValue.style.cssText = "font-size:20px;"
  titlePropValue.textContent = `${todoArray[index].getTitle()}`;
  titlePropValue.classList.add("title-properties");
  // Description
  const divForDescriptionProp = document.createElement("div");
  divForDescriptionProp.style.cssText = "display: flex; gap: 5px; width: 100%; justify-content:center;"
  const descriptionProp = document.createElement("div");
  descriptionProp.style.cssText = "font-weight: bold; font-size:20px;";
  descriptionProp.textContent = "Description: ";
  const descriptionPropValue = document.createElement("div");
  descriptionPropValue.style.cssText = "font-size:20px;"
  descriptionPropValue.classList.add("description-properties");
  descriptionPropValue.textContent = `${todoArray[index].getDescription()}`;
  // Due Date
  const divForDeadLineProp = document.createElement("div");
  divForDeadLineProp.style.cssText = "display: flex; gap: 5px; width: 100%; justify-content:center;";
  const deadLineProp = document.createElement("div");
  deadLineProp.style.cssText = "font-weight: bold; font-size:20px;";
  deadLineProp.textContent = "Due Date: ";
  const deadLinePropValue = document.createElement("div");
  deadLinePropValue.style.cssText = "font-size: 20px";
  deadLinePropValue.classList.add("dueDate-properties");
  deadLinePropValue.textContent = `${todoArray[index].getDueDate()}`;
  // priority
  const divForPriorityProp = document.createElement("div");
  divForPriorityProp.style.cssText = "display: flex; gap: 5px; width: 100%; justify-content:center;";
  const priorityProp = document.createElement("div");
  priorityProp.style.cssText = "font-weight: bold; font-size:20px;";
  priorityProp.textContent = "Priority: ";
  const priorityPropValue = document.createElement("div");
  priorityPropValue.style.cssText = "font-size: 20px";
  priorityPropValue.classList.add("priority-properties");
  priorityPropValue.textContent = `${todoArray[index].getPriority()}`;
  // Status
  const divForStatusProp = document.createElement("div");
  divForStatusProp.style.cssText = "display: flex; gap: 5px; width: 100%; justify-content:center;";
  const statusProp = document.createElement("div");
  statusProp.style.cssText = "font-weight: bold; font-size:20px;";
  statusProp.textContent = "Status: ";
  const statusPropValue = document.createElement("div");
  statusPropValue.style.cssText = "font-size: 20px";
  statusPropValue.classList.add("status-properties");
  statusPropValue.textContent = `${todoArray[index].getStatus()}`;
  // Project
  const divForProjectProp = document.createElement("div");
  divForProjectProp.style.cssText = "display: flex; gap: 5px; width: 100%; justify-content:center;";
  const projectProp = document.createElement("div");
  projectProp.style.cssText = "font-weight: bold; font-size:20px;";
  projectProp.textContent = "Project: ";
  const projectPropValue = document.createElement("div");
  projectPropValue.style.cssText = "font-size: 20px";
  projectPropValue.classList.add("project-properties");
  projectPropValue.textContent = `${todoArray[index].getProject()}`;
  // Button
  const closeBtnContainer = document.createElement("div");
  closeBtnContainer.classList.add("closeBtnContainer");
  const closeBtn = document.createElement("button");
  Object.assign(closeBtn,{
    id: "close",
  })
  closeBtn.classList.add("closebtn");
  closeBtn.textContent = "Close";
  // Add to DOM
  content.appendChild(parentContainer);
  parentContainer.appendChild(dialogProperties)
  dialogProperties.appendChild(headingElement);
  dialogProperties.appendChild(propertyContainer);
  // title
  propertyContainer.appendChild(divForTitleProp);
  divForTitleProp.appendChild(titleProp);
  divForTitleProp.appendChild(titlePropValue);
  // description
  propertyContainer.appendChild(divForDescriptionProp);
  divForDescriptionProp.appendChild(descriptionProp);
  divForDescriptionProp.appendChild(descriptionPropValue);
  // duedate
  propertyContainer.appendChild(divForDeadLineProp);
  divForDeadLineProp.appendChild(deadLineProp);
  divForDeadLineProp.appendChild(deadLinePropValue);
  // priority
  propertyContainer.appendChild(divForPriorityProp);
  divForPriorityProp.appendChild(priorityProp);
  divForPriorityProp.appendChild(priorityPropValue);
  // Status
  propertyContainer.appendChild(divForStatusProp);
  divForStatusProp.appendChild(statusProp);
  divForStatusProp.appendChild(statusPropValue);
  // project
  propertyContainer.appendChild(divForProjectProp);
  divForProjectProp.appendChild(projectProp);
  divForProjectProp.appendChild(projectPropValue);
  // button
  propertyContainer.appendChild(closeBtnContainer);
  closeBtnContainer.appendChild(closeBtn);
  showInfoDialog();
  updateInfoDialog(index);
  closeInfoDialog();
}
export{renderInfoDialog};
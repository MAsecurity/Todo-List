import { showInfoDialog } from "./showInfoDialog";
import { todoArray } from "../logic/addTodo";
function renderInfoDialog(index){
  const content = document.querySelector(".main-changing-content");
  const parentContainer = document.createElement("div");
  parentContainer.classList.add("dialog-container");
  const dialogProperties = document.createElement("dialog");
  dialogProperties.setAttribute("id", "dialogProperties");
  const headingElement = document.createElement("div");
  headingElement.textContent = "Properties";
  headingElement.style.cssText = "font-weight:bold; font-size:30px; text-decoration:underline; text-align:center;";
  const divForTitleProp = document.createElement("div");
  divForTitleProp.style.cssText = "display: flex; gap: 5px; width: 100%; justify-content:center;"
  const titleProp = document.createElement("div");
  titleProp.style.cssText = "font-weight: bold; font-size:20px;";
  titleProp.textContent = "Title: ";
  const titlePropValue = document.createElement("div");
  titlePropValue.style.cssText = "font-size:20px;"
  titlePropValue.textContent = `${todoArray[index].getTitle()}`;
  const divForDescriptionProp = document.createElement("div");
  divForDescriptionProp.style.cssText = "display: flex; gap: 5px; width: 100%; justify-content:center;"
  const descriptionProp = document.createElement("div");
  descriptionProp.style.cssText = "font-weight: bold; font-size:20px;";
  descriptionProp.textContent = "Description: ";
  const descriptionPropValue = document.createElement("div");
  descriptionPropValue.style.cssText = "font-size:20px;"
  descriptionPropValue.textContent = `${todoArray[index].getDescription()}`;
  // Add to DOM
  content.appendChild(parentContainer);
  parentContainer.appendChild(dialogProperties)
  dialogProperties.appendChild(headingElement);
  dialogProperties.appendChild(divForTitleProp);
  divForTitleProp.appendChild(titleProp);
  divForTitleProp.appendChild(titlePropValue);
  dialogProperties.appendChild(divForDescriptionProp);
  divForDescriptionProp.appendChild(descriptionProp);
  divForDescriptionProp.appendChild(descriptionPropValue);
  showInfoDialog();
}
export{renderInfoDialog};
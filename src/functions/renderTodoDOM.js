import { dates } from "./sortDates";
function todoDOM(element, index){
  const listOfTodo = document.querySelector(".list-of-todo");
  const todoCard = document.createElement("div");
  todoCard.classList.add("card");
  todoCard.setAttribute("index",`${index}`)
  const titleElement = document.createElement("div");
  titleElement.textContent = `${element.getTitle()}`;
  titleElement.style.cssText = "font-size: 20px;  font-weight:bold;";
  const iconContainer = document.createElement("div");
  iconContainer.classList.add("priority-icon-container");
  const actualIconPriority = document.createElement("span");
  actualIconPriority.classList.add("material-symbols-outlined");
  actualIconPriority.textContent = "circle";
  if (element.getPriority() == "low"){
    console.log("low")
    actualIconPriority.style.cssText = "font-size: 20px; color:gray ;"
  }else if(element.getPriority() == "medium"){
    actualIconPriority.style.cssText = "font-size: 20px; color:yellow;"
    console.log("medium");
  }else if (element.getPriority() == "high"){
    actualIconPriority.style.cssText = "font-size: 20px; color:red;";
    console.log("high");
  }
  let elementDueDate = dates(element.getDueDate());
  const dateElement = document.createElement("div");
  dateElement.textContent = `${elementDueDate}`;
  dateElement.style.cssText = "font-size: 10px; font-weight: bold; justify-self: end; color: gray;  font-style:italic;"
  const iconFields = document.createElement("div");
  iconFields.classList.add("icon-fields");
  const updateIconContainer = document.createElement("div");
  updateIconContainer.classList.add("update-icon-container");
  const showIconContainer = document.createElement("div");
  showIconContainer.classList.add("show-icon-container");
  const removeIconContainer = document.createElement("div");
  removeIconContainer.classList.add("remove-icon-container");
  const updateIcon = document.createElement("span");
  updateIcon.classList.add("material-symbols-outlined");
  updateIcon.style.cssText = "font-size: 30px; color: green;";
  updateIcon.textContent = "edit";
  updateIcon.setAttribute("index", `${index}`);
  const showIcon = document.createElement("span");
  showIcon.classList.add("material-symbols-outlined");
  showIcon.style.cssText = "font-size: 30px; color: gray;";
  showIcon.textContent = "feed";
  showIcon.setAttribute("index", `${index}`);
  const removeIcon = document.createElement("span");
  removeIcon.classList.add("material-symbols-outlined");
  removeIcon.style.cssText = "font-size: 30px; color: red;";
  removeIcon.textContent = "delete";
  removeIcon.setAttribute("index", `${index}`);
  // Add DOM elements
  listOfTodo.appendChild(todoCard);
  todoCard.appendChild(titleElement);
  todoCard.appendChild(iconContainer);
  iconContainer.appendChild(actualIconPriority);
  todoCard.appendChild(dateElement);
  todoCard.appendChild(iconFields);
  iconFields.appendChild(updateIconContainer);
  updateIconContainer.appendChild(updateIcon);
  iconFields.appendChild(showIconContainer);
  showIconContainer.appendChild(showIcon)
  iconFields.appendChild(removeIconContainer);
  removeIconContainer.appendChild(removeIcon)
  console.log(element.printObj());
};
export {todoDOM};
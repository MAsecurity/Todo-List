import { clearContents } from "./clear";
function renderTodo(arrayOfObj){
  clearContents();
  const content = document.querySelector(".main-changing-content");
  const listOfTodo = document.createElement("div");
  listOfTodo.classList.add("list-of-todo");
  content.appendChild(listOfTodo);
  arrayOfObj.forEach((element, index) => {
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
    const dateElement = document.createElement("div");
    dateElement.textContent = `${element.getDueDate()}`;
    dateElement.style.cssText = "font-weight: 15px; font-weight: bold; justify-self: end; color: #374151;  font-style:italic;"
    listOfTodo.appendChild(todoCard);
    todoCard.appendChild(titleElement);
    todoCard.appendChild(iconContainer);
    iconContainer.appendChild(actualIconPriority);
    todoCard.appendChild(dateElement);
    console.log(element.printObj());
})
}
export {renderTodo};
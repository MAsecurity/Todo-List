import { clearContents } from "./clear";
function renderTodo(arrayOfObj){
  clearContents();
  const content = document.querySelector(".main-changing-content");
  const listOfTodo = document.createElement("div");
  listOfTodo.classList.add("list-of-todo");
  content.appendChild(listOfTodo);
  arrayOfObj.forEach((element, index) => {
    const todoCard = document.createElement("div")
    todoCard.classList.add("card");
    listOfTodo.appendChild(todoCard);
})
}
export {renderTodo};
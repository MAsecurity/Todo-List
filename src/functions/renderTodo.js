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
    listOfTodo.appendChild(todoCard);
    console.log(element.printObj());
})
}
export {renderTodo};
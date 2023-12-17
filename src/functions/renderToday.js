import { today } from "./logic/compareDates";
import { clearContents } from "./clear";
import { todoDOM } from "./renderTodoDOM";
import { todoArray } from "./logic/addTodo";
import { container } from "./renderTodoContainer";
function todayNumber(){
  let result = today();
  const todayEl = document.querySelector(".sidebar-today-status");
  todayEl.textContent = `${result.length}`;
}
function renderToday(){
  let result = today();
  clearContents();
  container();
  result.forEach(filteredIndex => {
    todoDOM(todoArray[filteredIndex], filteredIndex)
  })
  
}
export {todayNumber, renderToday};
import { todoArray } from "./logic/addTodo"
import { filterComplete } from "./logic/filterComplete";
import { todoDOM } from "./renderTodoDOM";
import { clearContents } from "./clear";
import { container } from "./renderTodoContainer";
function completedNumber(){
  let filteredArray = filterComplete();
  const completeEl = document.querySelector(".sidebar-complete-status");
  completeEl.textContent = `${filteredArray.length}`;
  
}
function renderCompleted(){
  let result = filterComplete();
  clearContents();
  container();
  result.forEach(filteredIndex => {
    todoDOM(todoArray[filteredIndex], filteredIndex)
  })
}
export{completedNumber, renderCompleted}
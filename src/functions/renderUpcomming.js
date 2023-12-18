import { upcomming } from "./logic/compareDates";
import { clearContents } from "./clear";
import { container } from "./renderTodoContainer";
import { todoDOM } from "./renderTodoDOM";
import { todoArray } from "./logic/addTodo";
function upcommingNumber(){
  let result = upcomming();
  const upcommingEl = document.querySelector(".sidebar-upcomming-status");
  upcommingEl.textContent = `${result.length}`;
}
function renderUpcomming(){
  let result = upcomming();
  clearContents();
  container();
  result.forEach(filteredIndex => {
    todoDOM(todoArray[filteredIndex], filteredIndex)
  })

}
export {upcommingNumber, renderUpcomming};
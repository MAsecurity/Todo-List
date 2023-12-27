import { clearContents } from "./clear";
import { container } from "./renderTodoContainer";
import { todoDOM } from "./renderTodoDOM";
import { inboxNumber } from "./renderInbox";
import { todayNumber } from "./renderToday";
import { upcommingNumber } from "./renderUpcomming";
import { completedNumber } from "./renderCompleted";
import { projectsNumber } from "./renderProjects";
import { updateSubProjects } from "./renderProjects";
import { updateLocalStorage } from "./logic/localStorage";
import { todoArray } from "./logic/addTodo";
function renderTodo(arrayOfObj){
  clearContents()
  // Container DOM elements
  container();
  arrayOfObj.forEach((element, index) => {
    // DOM
    todoDOM(element, index);
  })
  inboxNumber();
  todayNumber();
  upcommingNumber();
  completedNumber();
  projectsNumber();
  updateSubProjects();
  updateLocalStorage()
}
export {renderTodo};
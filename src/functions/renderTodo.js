import { clearContents } from "./clear";
import { container } from "./renderTodoContainer";
import { todoDOM } from "./renderTodoDOM";
import { inboxNumber } from "./renderInbox";
import { todayNumber } from "./renderToday";
import { upcommingNumber } from "./renderUpcomming";
import { completedNumber } from "./renderCompleted";
import { projectsNumber } from "./renderProjects";
import { updateSubProjects } from "./renderProjects";
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
}
export {renderTodo};
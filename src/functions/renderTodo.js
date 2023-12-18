import { clearContents } from "./clear";
import { container } from "./renderTodoContainer";
import { todoDOM } from "./renderTodoDOM";
import { inboxNumber } from "./renderInbox";
import { todayNumber } from "./renderToday";
import { upcommingNumber } from "./renderUpcomming";
import { completedNumber } from "./renderCompleted";
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
}
export {renderTodo};
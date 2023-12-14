import { clearContents } from "./clear";
import { container } from "./renderTodoContainer";
import { todoDOM } from "./renderTodoDOM";
import { inboxNumber } from "./renderInbox";
function renderTodo(arrayOfObj){
  clearContents()
  // Container DOM elements
  container();
  arrayOfObj.forEach((element, index) => {
    // DOM
    todoDOM(element, index);
  })
  inboxNumber();
}
export {renderTodo};
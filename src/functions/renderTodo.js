import { clearContents } from "./clear";
import { container } from "./renderTodoContainer";
import { todoDOM } from "./renderTodoDOM";
function renderTodo(arrayOfObj){
  clearContents();
  // Container DOM elements
  container();
  arrayOfObj.forEach((element, index) => {
    // DOM
    todoDOM(element, index);
})
}
export {renderTodo};
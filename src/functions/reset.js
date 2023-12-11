import { clearContents } from "./clear";
import { renderTodo } from "./renderTodo";
import { todoArray } from "./logic/addTodo";
function reset(){
  clearContents();
  renderTodo(todoArray);
}
export{reset};
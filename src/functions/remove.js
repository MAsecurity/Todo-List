import { todoArray } from "./logic/addTodo";
import { reset } from "./reset";
function remove(index){
  todoArray.splice(index,1);
  reset(todoArray);
}
export {remove}
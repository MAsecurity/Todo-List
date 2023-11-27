import { Todo } from "./class";
import { renderTodo } from "../renderTodo";
let todoArray = [];
function addTodo(title, description, dueDate, priority, status, project){
  let newTodoObj = new Todo(title,description, dueDate, priority, status, project); 
  todoArray.push(newTodoObj);
  renderTodo(todoArray); 
}
export { todoArray, addTodo};
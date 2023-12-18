import { todoArray } from "./addTodo";
function filterComplete(){
  let newArray = [];
  todoArray.forEach((element,index) => {
    if (element.getStatus() == "Completed"){
      newArray.push(index);
    }
    
  });
  return newArray;
}
export {filterComplete};
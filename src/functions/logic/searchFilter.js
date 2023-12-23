import { todoArray } from "./addTodo";
function getSearchFilter(inputValue){
  let indexValue = -100;
  todoArray.forEach((obj, index) =>{
    let objToLowerCase = obj.getTitle().toLowerCase();
    let inputToLowerCase = inputValue.toLowerCase();
    if (objToLowerCase == inputToLowerCase){
      indexValue = index;
    }
  })
  return indexValue;

}
export{getSearchFilter}
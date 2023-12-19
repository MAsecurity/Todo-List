import { todoArray } from "./addTodo";
function filterProjects(){
  let newArray = [];
  todoArray.forEach(element => {
    if(newArray.includes(element.getProject())){
      // Do nothing
    }else{
      newArray.push(element.getProject());
      // Add to array
    }
    
  });
  return newArray;
}
export{filterProjects}
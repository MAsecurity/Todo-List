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
function filterProjectsByName(element){
  let newArray = [];
  todoArray.forEach((obj,index) => {
    if(obj.getProject() == element){
      newArray.push(index)
    }
  });
  return newArray;
}
export{filterProjects, filterProjectsByName}
import { todoArray } from "../logic/addTodo";
function priorityChecks(index){
  if (todoArray[index].getPriority() == "low"){
    const lowEl = document.querySelector("#low");
    Object.assign(lowEl,{
      checked: "checked"
    })
  }else if (todoArray[index].getPriority() == "medium"){
    const mediumEl = document.querySelector("#medium");
    Object.assign(mediumEl,{
      checked: "checked"
    })
  }else if (todoArray[index].getPriority() == "high"){
    const highEl = document.querySelector("#high");
    Object.assign(highEl,{
      checked: "checked"
    })
  }
}
function statusChecks(){

}
export {priorityChecks, statusChecks};
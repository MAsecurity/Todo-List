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
function statusChecks(index){
  if (todoArray[index].getStatus() == "Not in progress"){
    const notInProgressEl = document.querySelector("#not-in-progress");
    Object.assign(notInProgressEl,{
      checked: "checked"
    })
  }else if (todoArray[index].getStatus() == "In progress"){
    const progressEl = document.querySelector("#progress");
    Object.assign(progressEl,{
      checked: "checked"
    })
  }else if (todoArray[index].getStatus() == "Completed"){
    const completedEl = document.querySelector("#completed");
    Object.assign(completedEl,{
      checked: "checked"
    })
  }

}
export {priorityChecks, statusChecks};
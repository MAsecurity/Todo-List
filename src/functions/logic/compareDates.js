import { todoArray } from "./addTodo";
import { getCurrentDate } from "./sortDates";
function today (){
  let fullDate = getCurrentDate();
  let newArray = [];
  todoArray.forEach( (element,index)=> {
    if (element.getDueDate() == fullDate ){
      newArray.push(index);
    }
  });
  return newArray

}
function upcomming(){
  let currentDate = new Date();
  let fullDate =  currentDate.setHours(0,0,0,0)
  let newArray = [];
  todoArray.forEach( (element,index)=> {
    if (new Date(element.getDueDate()).setHours(0,0,0,0) > fullDate ){
      newArray.push(index);
    }else{
      // Do nothing
    }
  });
  return newArray


}
export {today, upcomming}
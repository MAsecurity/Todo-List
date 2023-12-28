import { todoArray } from "./addTodo";
function today (){
  let currentDate = new Date();
  let fullDate = `${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()}`;
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
    if (new Date(element.getDueDate()) > fullDate ){
      newArray.push(index);
    }else{
      // Do nothing
    }
  });
  return newArray


}
export {today, upcomming}
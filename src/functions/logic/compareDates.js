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
export {today}
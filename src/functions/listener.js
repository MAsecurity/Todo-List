import { dialog } from "./renderDialog";
function listen(){
  const createTaskBtn = document.querySelector("#createTodo");
  createTaskBtn.addEventListener("click",() =>{
    dialog();
  });

}
export {listen}
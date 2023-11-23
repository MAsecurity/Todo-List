import { dialog } from "./renderDialog";
function listen(){
  const createTaskBtn = document.querySelector("#createTodo");
  createTaskBtn.addEventListener("click",() =>{
    dialog();
  });
  const sidebarProjectsIcon = document.querySelector(".sidebar-projects .material-symbols-outlined");
}
export {listen}
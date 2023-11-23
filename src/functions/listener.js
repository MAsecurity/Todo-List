import { dialog } from "./renderDialog";
import { projects } from "./renderProjects";
function listen(){
  const createTaskBtn = document.querySelector("#createTodo");
  createTaskBtn.addEventListener("click",() =>{
    dialog();
  });
  const sidebarProjectsIcon = document.querySelector(".sidebar-projects .material-symbols-outlined");
  sidebarProjectsIcon.addEventListener("click", projects);
}
export {listen}

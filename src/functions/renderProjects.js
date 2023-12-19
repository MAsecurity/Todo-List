import { filterProjects } from "./logic/filterProjects";
function projects(){
  const checkSideBarIcon = document.querySelector(".sidebar-projects .material-symbols-outlined");
  checkSideBarIcon.textContent = (checkSideBarIcon.textContent == 'expand_circle_right') ? checkSideBarIcon.textContent = 'expand_circle_down': checkSideBarIcon.textContent= 'expand_circle_right'; 
}
function projectsNumber(){
  let newArr = filterProjects();
  const projectStatus = document.querySelector(".sidebar-projects-status");
  projectStatus.textContent = `${newArr.length}`;
}
function renderProjectFields(){

}
export{projects, projectsNumber}
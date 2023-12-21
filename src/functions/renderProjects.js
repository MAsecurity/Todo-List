import { filterProjects } from "./logic/filterProjects";
import { projectsDom } from "./renderProjectFieldsDOM";
function projects(){
  const checkSideBarIcon = document.querySelector(".sidebar-projects .material-symbols-outlined");
  if (checkSideBarIcon.textContent == 'expand_circle_right'){
    renderProjectFields()
  }else{
    clearProjectFields()
  }
}
function projectsNumber(){
  let newArr = filterProjects();
  const projectStatus = document.querySelector(".sidebar-projects-status");
  projectStatus.textContent = `${newArr.length}`;
}
function renderProjectFields(){
  const checksideBarIconForRender = document.querySelector(".sidebar-projects .material-symbols-outlined");
  checksideBarIconForRender.textContent = 'expand_circle_down';
  let newArr = filterProjects();
  newArr.forEach(element => {
    projectsDom(element);
  })
}
function clearProjectFields(){
  const checkSideBarIconForClearing = document.querySelector(".sidebar-projects .material-symbols-outlined");
  checkSideBarIconForClearing.textContent= 'expand_circle_right';
  const newProjectField = document.querySelectorAll(".new-project");
  newProjectField.forEach(project => {
    project.remove()
  });
}
export{projects, projectsNumber}
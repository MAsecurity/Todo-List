import { filterProjects } from "./logic/filterProjects";
import { projectsDom } from "./renderProjectFieldsDOM";
import { todoArray } from "./logic/addTodo";
import { clearContents } from "./clear";
import { container } from "./renderTodoContainer";
import { todoDOM } from "./renderTodoDOM";
import { filterProjectsByName } from "./logic/filterProjects";
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
    renderSubProjectFields(element);
  });

}
function renderSubProjectFields(element){
  let newArray = filterProjectsByName(element)
  const projectStatus = document.querySelector(`#${element}-status`)
  projectStatus.textContent = `${newArray.length}`;
  const projects = document.querySelector(`#${element}`)
  projects.onclick = () => {
    clearContents();
    container();
    newArray.forEach(filteredIndex=> {
      todoDOM(todoArray[filteredIndex], filteredIndex);
    })
  }
}
function updateSubProjects(){
  const checksideBarIconForRender = document.querySelector(".sidebar-projects .material-symbols-outlined");
  if(checksideBarIconForRender.textContent == "expand_circle_down"){
    clearProjectFields()
    renderProjectFields()
  }
}
function clearProjectFields(){
  const checkSideBarIconForClearing = document.querySelector(".sidebar-projects .material-symbols-outlined");
  checkSideBarIconForClearing.textContent= 'expand_circle_right';
  const newProjectField = document.querySelectorAll(".new-project");
  newProjectField.forEach(project => {
    project.remove()
  });
}
export{projects, projectsNumber, renderSubProjectFields, updateSubProjects}
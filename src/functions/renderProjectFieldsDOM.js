function projectsDom(projectName){
  const sideBarProjects = document.querySelector(".sidebar-projects");
  const newProject = document.createElement("div");
  newProject.setAttribute("id", `${projectName}`);
  newProject.classList.add("new-project");
  const newProjectTitle = document.createElement("span");
  newProjectTitle.textContent = `${projectName}`;
  const newProjectStatus = document.createElement("span");
  newProjectStatus.classList.add("new-project-status");
  newProjectStatus.textContent = "0";
  newProjectStatus.setAttribute("id", `${projectName}-status`)
  sideBarProjects.appendChild(newProject);
  newProject.appendChild(newProjectTitle);
  newProject.appendChild(newProjectStatus);
}
export {projectsDom};
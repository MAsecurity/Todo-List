function projectsDom(projectName){
  const sideBarProjects = document.querySelector(".sidebar-projects");
  let splitProjectName = projectName.split(" ").join("-");
  const newProject = document.createElement("div");
  newProject.setAttribute("id", `project-${splitProjectName}`);
  newProject.classList.add("new-project");
  const newProjectTitle = document.createElement("span");
  newProjectTitle.textContent = `${projectName}`;
  const newProjectStatus = document.createElement("span");
  newProjectStatus.classList.add("new-project-status");
  newProjectStatus.textContent = "0";
  newProjectStatus.setAttribute("id", `project-${splitProjectName}-status`)
  sideBarProjects.appendChild(newProject);
  newProject.appendChild(newProjectTitle);
  newProject.appendChild(newProjectStatus);
}
export {projectsDom};
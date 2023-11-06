import "../style.css";
function getRenderDefault(){
  const contentElement = document.createElement("div");
  contentElement.setAttribute("id", "content");
  const navBar = document.createElement("div");
  navBar.classList.add("navbar");
  const sideBar = document.createElement("div");
  sideBar.classList.add("sidebar");
  const mainContent = document.createElement("div");
  mainContent.classList.add("main");
  document.body.appendChild(contentElement);
  contentElement.appendChild(navBar);
  contentElement.appendChild(sideBar);
  contentElement.appendChild(mainContent);

};
export {getRenderDefault};
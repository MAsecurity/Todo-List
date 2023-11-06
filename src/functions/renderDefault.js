import "../style.css";
import unDrawImg from "../images/undrawImg.svg";
function getRenderDefault(){
  const contentElement = document.createElement("div");
  contentElement.setAttribute("id", "content");
  const navBar = document.createElement("div");
  navBar.classList.add("navbar");
  const sideBar = document.createElement("div");
  sideBar.classList.add("sidebar");
  const mainContent = document.createElement("div");
  mainContent.classList.add("main");
  const currentContent = document.createElement("div");
  currentContent.classList.add("current-content");
  const mainActualImg = document.createElement("img");
  mainActualImg.style.cssText = "width:50%; height:50%"
  mainActualImg.src = unDrawImg;
  document.body.appendChild(contentElement);
  contentElement.appendChild(navBar);
  contentElement.appendChild(sideBar);
  contentElement.appendChild(mainContent);
  mainContent.appendChild(currentContent);
  currentContent.appendChild(mainActualImg);

};
export {getRenderDefault};
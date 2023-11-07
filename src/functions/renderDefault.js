import "../style.css";
import unDrawImg from "../images/icons/undrawImg.svg";
function getRenderDefault(){
  // Add icons dependencies
  const linkMaterialIcons = document.createElement("link");
  Object.assign(linkMaterialIcons,{
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'
  })
  // Create default content
  const contentElement = document.createElement("div");
  contentElement.setAttribute("id", "content");
  //Navbar section
  const navBar = document.createElement("div");
  navBar.classList.add("navbar");
  const navBarLeft = document.createElement("div");
  navBarLeft.classList.add("nav-content-left")
  const searchBar = document.createElement("input");
  searchBar.classList.add("searchbar");
  searchBar.setAttribute("placeholder", "Search...");
  const searchIconImg = document.createElement("span");
  searchIconImg.classList.add("material-symbols-outlined")
  searchIconImg.textContent = "search";
  const searchBarBtn = document.createElement("button");
  const navBarRight = document.createElement("div");
  navBarRight.classList.add("nav-content-right");
  const navBarTitle = document.createElement("div");
  navBarTitle.textContent = "Todo List"
  const sideBar = document.createElement("div");
  sideBar.classList.add("sidebar");
  const mainContent = document.createElement("div");
  mainContent.classList.add("main");
  const mainContainerImg = document.createElement("div");
  mainContainerImg.classList.add("main-container-img");
  const mainActualImg = document.createElement("img");
  mainActualImg.style.cssText = "width:50%; height:50%"
  mainActualImg.src = unDrawImg;
  // Add DOM elements
  document.head.appendChild(linkMaterialIcons)
  document.body.appendChild(contentElement);
  contentElement.appendChild(navBar);
  navBar.appendChild(navBarLeft);
  navBarLeft.appendChild(searchBar);
  navBarLeft.appendChild(searchBarBtn);
  searchBarBtn.appendChild(searchIconImg)
  navBar.appendChild(navBarRight);
  navBarRight.appendChild(navBarTitle);
  contentElement.appendChild(sideBar);
  contentElement.appendChild(mainContent);
  mainContent.appendChild(mainContainerImg);
  mainContainerImg.appendChild(mainActualImg);

};
export {getRenderDefault};
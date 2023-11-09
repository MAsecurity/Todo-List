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
  navBarTitle.textContent = "Todo List";
  //Sidebar section
  const sideBar = document.createElement("div");
  sideBar.classList.add("sidebar");
  const sideBarTitleContainer = document.createElement("div");
  sideBarTitleContainer.classList.add("sidebar-title-container");
  const sideBarTitle = document.createElement("span");
  sideBarTitle.textContent = "Todo List Dashboard";
  const sideBarTitleIcon = document.createElement("span");
  sideBarTitleIcon.classList.add("material-symbols-outlined");
  sideBarTitleIcon.textContent = "dashboard";
  const sideBarFields = document.createElement("div");
  sideBarFields.classList.add("sidebar-fields");
  const sideBarInbox = document.createElement("div");
  sideBarInbox.classList.add("sidebar-inbox")
  const sideBarInboxTitle = document.createElement("span");
  sideBarInboxTitle.textContent = "Inbox";
  const sideBarInboxIcon = document.createElement("span");
  sideBarInboxIcon.textContent= "inbox";
  sideBarInboxIcon.classList.add("material-symbols-outlined"); 
  const sideBarInboxStatus = document.createElement("span");
  sideBarInboxStatus.classList.add("sidebar-inbox-status");
  sideBarInboxStatus.textContent = "0";
  const sideBarToday = document.createElement("div");
  sideBarToday.classList.add("sidebar-today");
  const sideBarTodayTitle = document.createElement("span");
  sideBarTodayTitle.textContent = "Today";
  const sideBarTodayIcon  = document.createElement("span");
  sideBarTodayIcon.classList.add("material-symbols-outlined");
  sideBarTodayIcon.textContent = "today";
  const sideBarTodayStatus = document.createElement("span");
  sideBarTodayStatus.classList.add("sidebar-today-status");
  sideBarTodayStatus.textContent = "0";
  const sideBarUpcomming = document.createElement("div");
  sideBarUpcomming.classList.add("sidebar-upcomming");
  const sideBarUpcommingTitle = document.createElement("span");
  sideBarUpcommingTitle.textContent = "Upcomming";
  const sideBarUpcommingIcon = document.createElement("span");
  sideBarUpcommingIcon.textContent = "calendar_month";
  sideBarUpcommingIcon.classList.add("material-symbols-outlined");
  const sideBarUpcommingStatus = document.createElement("span");
  sideBarUpcommingStatus.textContent = "0";
  sideBarUpcommingStatus.classList.add("sidebar-upcomming-status");
  const sideBarProjects = document.createElement("div");
  sideBarProjects.classList.add("sidebar-projects");
  const sideBarProjectsTitle = document.createElement("span");
  sideBarProjectsTitle.textContent = "Projects";
  const sideBarProjectsIcon = document.createElement("span");
  sideBarProjectsIcon.classList.add("material-symbols-outlined");
  sideBarProjectsIcon.textContent = "expand_circle_right";
  const sideBarProjectsStatus = document.createElement("span");
  sideBarProjectsStatus.textContent = "0";
  sideBarProjectsStatus.classList.add("sidebar-projects-status")
  // Main content section
  const mainContent = document.createElement("div");
  mainContent.classList.add("main");
  const mainCreateTask = document.createElement("div");
  mainCreateTask.classList.add("create-task");
  const mainCreateTaskTitle =  document.createElement("span");
  mainCreateTaskTitle.classList.add("create-task-title");
  mainCreateTaskTitle.textContent = "Create a task here..."
  const mainCreateTaskIcon = document.createElement("span");
  mainCreateTaskIcon.classList.add("material-symbols-outlined");
  mainCreateTaskIcon.textContent = "add_circle";
  const mainChangingContent = document.createElement("div");
  mainChangingContent.classList.add("main-changing-content");
  const mainContainerImg = document.createElement("div");
  mainContainerImg.classList.add("main-container-img");
  const mainActualImg = document.createElement("img");
  mainActualImg.style.cssText = "width:50%; height:50%"
  mainActualImg.src = unDrawImg;
  // Add DOM elements
  document.head.appendChild(linkMaterialIcons)
  document.body.appendChild(contentElement);
  // Adding navbar
  contentElement.appendChild(navBar);
  navBar.appendChild(navBarLeft);
  navBarLeft.appendChild(searchBar);
  navBarLeft.appendChild(searchBarBtn);
  searchBarBtn.appendChild(searchIconImg)
  navBar.appendChild(navBarRight);
  navBarRight.appendChild(navBarTitle);
  // Adding sidebar
  contentElement.appendChild(sideBar);
  sideBar.appendChild(sideBarTitleContainer);
  sideBarTitleContainer.appendChild(sideBarTitleIcon);
  sideBarTitleContainer.appendChild(sideBarTitle);
  sideBar.appendChild(sideBarFields);
  sideBarFields.appendChild(sideBarInbox);
  sideBarInbox.appendChild(sideBarInboxIcon);
  sideBarInbox.appendChild(sideBarInboxTitle);
  sideBarInbox.appendChild(sideBarInboxStatus);
  sideBarFields.appendChild(sideBarToday);
  sideBarToday.appendChild(sideBarTodayIcon);
  sideBarToday.appendChild(sideBarTodayTitle);
  sideBarToday.appendChild(sideBarTodayStatus);
  sideBarFields.appendChild(sideBarUpcomming);
  sideBarUpcomming.appendChild(sideBarUpcommingIcon);
  sideBarUpcomming.appendChild(sideBarUpcommingTitle);
  sideBarUpcomming.appendChild(sideBarUpcommingStatus);
  sideBar.appendChild(sideBarProjects);
  sideBarProjects.appendChild(sideBarProjectsIcon);
  sideBarProjects.appendChild(sideBarProjectsTitle);
  sideBarProjects.appendChild(sideBarProjectsStatus);
  // Adding Main content
  contentElement.appendChild(mainContent);
  mainContent.appendChild(mainCreateTask);
  mainCreateTask.appendChild(mainCreateTaskTitle);
  mainCreateTask.appendChild(mainCreateTaskIcon);
  mainContent.appendChild(mainChangingContent);
  mainChangingContent.appendChild(mainContainerImg);
  mainContainerImg.appendChild(mainActualImg);

};
export {getRenderDefault};
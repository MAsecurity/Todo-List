function projects(){
  const checkSideBarIcon = document.querySelector(".sidebar-projects .material-symbols-outlined");
  checkSideBarIcon.textContent = (checkSideBarIcon.textContent == 'expand_circle_right') ? checkSideBarIcon.textContent = 'expand_circle_down': checkSideBarIcon.textContent= 'expand_circle_right'; 
}
export{projects}
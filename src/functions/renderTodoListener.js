import { renderInfoDialog } from "./todoDialogs/infoDialog";
function listenTodo(){
  const update = document.querySelector(".update-icon-container span");
  const infos = document.querySelectorAll(".show-icon-container span");
  const remove = document.querySelector(".remove-icon-container span");
  // Add some event listeners 
  infos.forEach(info=>{
    info.addEventListener("click", () => {
      renderInfoDialog(info.getAttribute("index"));
     
    })
  })
}
export {listenTodo}
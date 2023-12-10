import { renderInfoDialog } from "./todoDialogs/infoDialog";
import { update } from "./todoDialogs/editDialog";
function listenTodo(){
  const updates = document.querySelectorAll(".update-icon-container span");
  const infos = document.querySelectorAll(".show-icon-container span");
  const remove = document.querySelector(".remove-icon-container span");
  // Add some event listeners 
  infos.forEach(info=>{
    info.addEventListener("click", () => {
      renderInfoDialog(info.getAttribute("index"));
     
    })
  });
  updates.forEach(element=>{
    element.addEventListener("click",() =>{
      update(element.getAttribute("index"));

    });
  });
}
export {listenTodo}
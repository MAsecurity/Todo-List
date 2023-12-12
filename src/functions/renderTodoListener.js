import { renderInfoDialog } from "./todoDialogs/infoDialog";
import { update } from "./todoDialogs/editDialog";
import { remove } from "./remove";
function listenTodo(){
  const updates = document.querySelectorAll(".update-icon-container span");
  const infos = document.querySelectorAll(".show-icon-container span");
  const removes = document.querySelectorAll(".remove-icon-container span");
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

export {listenTodo};
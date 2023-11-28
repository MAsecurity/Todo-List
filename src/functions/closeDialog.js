function closeDialog(){
  const dialogEl = document.querySelector("#dialog");
  const cancelBtn = document.querySelector("#cancel");
  cancelBtn.addEventListener("click",()=>{
    event.preventDefault();
    dialogEl.close()
  })
}
export {closeDialog};
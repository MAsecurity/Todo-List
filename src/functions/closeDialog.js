function closeDialog(){
  const cancelBtn = document.querySelector("#cancel");
  cancelBtn.addEventListener("click",()=>{
    event.preventDefault();
    dialog.close()
  })
}
export {closeDialog};
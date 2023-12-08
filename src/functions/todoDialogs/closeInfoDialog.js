function closeInfoDialog(){
  const dialogPropEl = document.querySelector("#dialogProperties");
  const closePropBtn = document.querySelector("#close");
  closePropBtn.addEventListener("click",()=>{
    event.preventDefault();
    dialogPropEl.close()
  })
}
export {closeInfoDialog};
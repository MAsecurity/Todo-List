function clearTodoDialog(){
  const clearContainer = document.querySelector(".dialog-container");
  if(clearContainer){
    clearContainer.remove();
  }
}
export{clearTodoDialog}
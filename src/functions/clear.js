function clearContents(){
  const currentNode = document.querySelector(".main-changing-content");
  while(currentNode.firstElementChild){
    currentNode.firstElementChild.remove();
  }
}
export{clearContents};
function renderTodo(arrayOfObj){
  arrayOfObj.forEach(element => {
    console.log(element.printObj());
})
}
export {renderTodo};
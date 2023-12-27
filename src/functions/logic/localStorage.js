import { todoArray } from "./addTodo";
import { addTodo } from "./addTodo";
function localStorageAvailable(type){
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
  // Docs for testing if local storage is available -> https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
}
function updateLocalStorage(){
  let stringArray = JSON.stringify(todoArray);
  localStorage.removeItem("array");
  localStorage.setItem("array", stringArray);
}
function getLocalStorage(){
  let retStringArray = localStorage.getItem("array");
  let retArray = JSON.parse(retStringArray);
  return retArray;
}
function updateArray(){
  let savedLocalStorageArray = getLocalStorage();
  for(let i=0; i<savedLocalStorageArray.length; i++){
    addTodo(savedLocalStorageArray[i].title, savedLocalStorageArray[i].description, savedLocalStorageArray[i].dueDate, savedLocalStorageArray[i].priority,savedLocalStorageArray[i].status ,savedLocalStorageArray[i].project);
  }
}
export {localStorageAvailable, updateLocalStorage, getLocalStorage, updateArray }

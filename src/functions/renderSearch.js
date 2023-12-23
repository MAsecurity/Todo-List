import { getSearchFilter } from "./logic/searchFilter";
import { container } from "./renderTodoContainer";
import { clearContents } from "./clear";
import { todoArray } from "./logic/addTodo";
import { todoDOM } from "./renderTodoDOM";
import { errorNotFound } from "./searchError";
function renderSearch(){
  const searchBarEL = document.querySelector(".searchbar");
  if (searchBarEL.value != ''){
    let inputValue = searchBarEL.value;
    let filteredIndex = getSearchFilter(inputValue);
    clearContents();
    if (filteredIndex == -100){
      // means nothing was found
      errorNotFound()
    }else{
      container();
      todoDOM(todoArray[filteredIndex], filteredIndex);
    }
  }
}
export {renderSearch}
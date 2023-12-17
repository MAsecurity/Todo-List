import { todoArray } from "./logic/addTodo";
import { reset } from "./reset";
function inboxNumber(){
  const sideBarInboxStatusEL =  document.querySelector(".sidebar-inbox-status");
  sideBarInboxStatusEL.textContent = `${todoArray.length}`;
}
function renderInbox(){
  reset();
}
export {inboxNumber , renderInbox};
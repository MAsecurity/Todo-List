import { todoArray } from "./logic/addTodo";
function inboxNumber(){
  const sideBarInboxStatusEL =  document.querySelector(".sidebar-inbox-status");
  sideBarInboxStatusEL.textContent = `${todoArray.length}`;
}
function renderInbox(){

}
export {inboxNumber};
import { clearContents } from "./clear";
import { showDialog } from "./showDialog";
function dialog(){
  clearContents();
  const content = document.querySelector(".main-changing-content");
  const parentContainer = document.createElement("div");
  parentContainer.classList.add("dialog-container");
  const dialogElement = document.createElement("dialog");
  dialogElement.setAttribute("id", "dialog");
  const headingElement = document.createElement("div");
  headingElement.textContent = "Todo List";
  headingElement.style.cssText = "font-weight:bold; font-size:30px; text-decoration:underline; text-align:center;";
  const formElement = document.createElement("form");
  const divSectionOne = document.createElement("div");
  const divSectionOneForLabel = document.createElement("div");
  divSectionOneForLabel.classList.add("div-for-label");
  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for","title");
  titleLabel.textContent = "Title";
  titleLabel.style.cssText = "font-weight: bold; ";
  const requriedStatus = document.createElement("span");
  requriedStatus.textContent = "Required";
  requriedStatus.classList.add("required-status");
  const titleInput = document.createElement("input");
  Object.assign(titleInput,{
    type: "text",
    id: "title",
    required: "required"
  });
  const divSectionTwo = document.createElement("div");
  const divsectionTwoForLabel = document.createElement("div");
  divsectionTwoForLabel.classList.add("div-for-label");
  const descriptionLabel = document.createElement("label");
  descriptionLabel.setAttribute("for","description");
  descriptionLabel.textContent = "Description";
  descriptionLabel.style.cssText = "font-weight: bold;"
  const descriptionInput = document.createElement("input");
  Object.assign(descriptionInput,{
    type: "text",
    id: "description",
    required: "required"
  });
  const requriedStatus2 = document.createElement("span");
  requriedStatus2.textContent = "Required";
  requriedStatus2.classList.add("required-status");
  content.appendChild(parentContainer);
  parentContainer.appendChild(dialogElement)
  dialogElement.appendChild(headingElement);
  dialogElement.appendChild(formElement);
  // section1
  formElement.appendChild(divSectionOne)
  divSectionOne.appendChild(divSectionOneForLabel);
  divSectionOneForLabel.appendChild(titleLabel);
  divSectionOneForLabel.appendChild(requriedStatus)
  divSectionOne.appendChild(titleInput);
  // section2
  formElement.appendChild(divSectionTwo)
  divSectionTwo.appendChild(divsectionTwoForLabel);
  divsectionTwoForLabel.appendChild(descriptionLabel);
  divsectionTwoForLabel.appendChild(requriedStatus2);
  divSectionTwo.appendChild(descriptionInput);

  showDialog();
  
}
export {dialog}
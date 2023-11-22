import { clearContents } from "./clear";
import { closeDialog } from "./closeDialog";
import { showDialog } from "./showDialog";
import { addTodo } from "./addTodo";
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
  // section1
  const divSectionOne = document.createElement("div");
  const divSectionOneForLabel = document.createElement("div");
  divSectionOneForLabel.classList.add("div-for-label");
  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for","title");
  titleLabel.textContent = "Title:";
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
  // section2
  const divSectionTwo = document.createElement("div");
  const divsectionTwoForLabel = document.createElement("div");
  divsectionTwoForLabel.classList.add("div-for-label");
  const descriptionLabel = document.createElement("label");
  descriptionLabel.setAttribute("for","description");
  descriptionLabel.textContent = "Description:";
  descriptionLabel.style.cssText = "font-weight: bold;"
  const descriptionInput = document.createElement("textarea");
  Object.assign(descriptionInput,{
    id: "description",
    required: "required"
  });
  const requriedStatus2 = document.createElement("span");
  requriedStatus2.textContent = "Required";
  requriedStatus2.classList.add("required-status");
  // section3
  const divSectionThree = document.createElement("div");
  const divSectionThreeForLabel = document.createElement("div");
  divSectionThreeForLabel.classList.add("div-for-label");
  const dueDateLabel = document.createElement("label");
  dueDateLabel.setAttribute("for","date");
  dueDateLabel.textContent = "Due Date:"
  dueDateLabel.style.cssText = "font-weight: bold;";
  const dueDate = document.createElement("input");
  Object.assign(dueDate,{
    type: "date",
    id: "date",
    required: "required"
  });
  const requriedStatus3 = document.createElement("span");
  requriedStatus3.textContent = "Required";
  requriedStatus3.classList.add("required-status");
  // section4
  const fieldsetPriority = document.createElement("fieldset");
  const legendPriority = document.createElement("legend");
  legendPriority.textContent = "Priority:";
  // low
  const divLowPriority = document.createElement("div");
  const lowPriority = document.createElement("input");
  Object.assign(lowPriority,{
    type: "radio",
    name: "radio",
    value: "low",
    id: "low",
    checked: "checked"
  });
  const lowPriorityLabel = document.createElement("label");
  lowPriorityLabel.textContent = "Low";
  lowPriorityLabel.setAttribute("for", "low");
  // medium
  const divMediumPriority = document.createElement("div");
  const mediumPriority = document.createElement("input");
  Object.assign(mediumPriority,{
    type: "radio",
    name: "radio",
    value: "medium",
    id: "medium"
  });
  const mediumPriorityLabel = document.createElement("label");
  mediumPriorityLabel.textContent = "Medium";
  mediumPriorityLabel.setAttribute("for", "medium");
  // high
  const divHighPriority = document.createElement("div");
  const highPriority = document.createElement("input");
  Object.assign(highPriority,{
    type: "radio",
    name: "radio",
    value: "high",
    id: "high"
  });
  const highPriorityLabel = document.createElement("label");
  highPriorityLabel.textContent = "High";
  highPriorityLabel.setAttribute("for", "high");
  // section5
  const buttons = document.createElement("div");
  buttons.classList.add("buttonsflex");
  const cancelBtn = document.createElement("button");
  Object.assign(cancelBtn,{
    id: "cancel",
  })
  cancelBtn.classList.add("cancelbtn");
  cancelBtn.textContent = "Cancel";
  const submitBtn = document.createElement("button");
  Object.assign(submitBtn,{
    id: "submit"
  })
  submitBtn.classList.add("submitbtn")
  submitBtn.textContent = "Create";

  // Adding Elements to the DOM
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
  // section3
  formElement.appendChild(divSectionThree);
  divSectionThree.appendChild(divSectionThreeForLabel);
  divSectionThreeForLabel.appendChild(dueDateLabel);
  divSectionThreeForLabel.appendChild(requriedStatus3)
  divSectionThree.appendChild(dueDate);
  // section4
  formElement.appendChild(fieldsetPriority);
  fieldsetPriority.appendChild(legendPriority);
  fieldsetPriority.appendChild(divLowPriority);
  divLowPriority.appendChild(lowPriority);
  divLowPriority.appendChild(lowPriorityLabel);
  fieldsetPriority.appendChild(divMediumPriority);
  divMediumPriority.appendChild(mediumPriority);
  divMediumPriority.appendChild(mediumPriorityLabel);
  fieldsetPriority.appendChild(divHighPriority);
  divHighPriority.appendChild(highPriority);
  divHighPriority.appendChild(highPriorityLabel);
  formElement.appendChild(buttons);
  buttons.appendChild(cancelBtn);
  buttons.appendChild(submitBtn);
  showDialog();
  closeDialog();
  addTodo();
};
export {dialog}
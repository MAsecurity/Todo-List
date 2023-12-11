import { clearTodoDialog } from "./clearTodoDialog";
import { todoArray } from "../logic/addTodo";
import { showEditDialog } from "./showEditDialog";
import { closeEditDialog } from "./closeEditDialog";
import { priorityChecks } from "./checkEditDialog";
import { updateTodo } from "./updateEditDialog";
function update(index){
  clearTodoDialog()
  const content = document.querySelector(".main-changing-content");
  const parentContainer = document.createElement("div");
  parentContainer.classList.add("dialog-container");
  const dialogElement = document.createElement("dialog");
  dialogElement.setAttribute("id", "dialog");
  const headingElement = document.createElement("div");
  headingElement.textContent = "Update Todo";
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
  titleInput.value = `${todoArray[index].getTitle()}`
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
  descriptionInput.value = `${todoArray[index].getDescription()}`;
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
  dueDate.value = `${todoArray[index].getDueDate()}`;
  const requriedStatus3 = document.createElement("span");
  requriedStatus3.textContent = "Required";
  requriedStatus3.classList.add("required-status");
  // section4 project
  const divSectionFour = document.createElement("div");
  const divSectionFourForLabel = document.createElement("div");
  divSectionFourForLabel.classList.add("div-for-label");
  const projectLabel = document.createElement("label");
  projectLabel.setAttribute("for","project");
  projectLabel.textContent = "Project:"
  projectLabel.style.cssText = "font-weight: bold;";
  const project = document.createElement("input");
  Object.assign(project,{
    type: "text",
    id: "project",
    placeholder: "Not required"
  });
  project.value  = `${todoArray[index].getProject()}`;
  // section5
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
  // section6
  const fieldsetStatus = document.createElement("fieldset");
  const legendStatus = document.createElement("legend");
  legendStatus.textContent = "Status:";
  // Not in Progress
  const divStatusNotInProgress = document.createElement("div");
  const notInProgress = document.createElement("input");
  Object.assign(notInProgress,{
    type: "radio",
    name: "status",
    value: "Not-in-progress",
    id: "not-in-progress",
    checked: "checked"
  });
  const notInProgressLabel = document.createElement("label");
  notInProgressLabel.textContent = "Not in progress";
  notInProgressLabel.setAttribute("for", "not-in-progress");
  // Progress
  const divStatusProgress = document.createElement("div");
  const progress = document.createElement("input");
  Object.assign(progress,{
    type: "radio",
    name: "status",
    value: "progress",
    id: "progress"
  });
  const progressLabel = document.createElement("label");
  progressLabel.textContent = "In progress";
  progressLabel.setAttribute("for", "progress");
  // completed
  const divStatusCompleted = document.createElement("div");
  const completed = document.createElement("input");
  Object.assign(completed,{
    type: "radio",
    name: "status",
    value: "completed",
    id: "completed"
  });
  const completedLabel = document.createElement("label");
  completedLabel.textContent = "Completed";
  completedLabel.setAttribute("for", "completed");
  // section7
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
  submitBtn.textContent = "Update";

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
  formElement.appendChild(divSectionFour);
  divSectionFour.appendChild(divSectionFourForLabel);
  divSectionFourForLabel.appendChild(projectLabel);
  divSectionFour.appendChild(project);
  // section5
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
  // section6
  formElement.appendChild(fieldsetStatus);
  fieldsetStatus.appendChild(legendStatus);
  fieldsetStatus.appendChild(divStatusNotInProgress);
  divStatusNotInProgress.appendChild(notInProgress);
  divStatusNotInProgress.appendChild(notInProgressLabel);
  fieldsetStatus.appendChild(divStatusProgress);
  divStatusProgress.appendChild(progress);
  divStatusProgress.appendChild(progressLabel);
  fieldsetStatus.appendChild(divStatusCompleted);
  divStatusCompleted.appendChild(completed);
  divStatusCompleted.appendChild(completedLabel);

  formElement.appendChild(buttons);
  buttons.appendChild(cancelBtn);
  buttons.appendChild(submitBtn);
  priorityChecks(index);
  showEditDialog();
  updateTodo(index);
  closeEditDialog();

}
export {update}
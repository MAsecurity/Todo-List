import { SourceMapDevToolPlugin } from "webpack";

class Todo{
  constructor(title, description, dueDate, priority, status, project){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.status = status;
    this.project = project;
  }
  getTitle(){
    return this.title;
  }
  getDescription(){
    return this.description;
  }
  getDueDate(){
    return this.dueDate;
  }
  getPriority(){
    return this.priority;
  }
  getStatus(){
    return this.status;
  }
  getProject(){
    return this.project;
  }
  setTitle(title){
    this.title = title;
  }
  setDescription(description){
    this.description = description;
  }
  setDueDate(dueDate){
    this.dueDate =  dueDate;
  }
  setPriority(priority){
    this.priority = priority;
  }
  setStatus(status){
    this.status = status;
  }
  setProject(project){
    this.project = project;
  }
  printObj(){
    return "Title: "+this.title+" Description: "+this.description+" Due Date: "+this.dueDate+" Priority: "+this.priority+" Status: "+this.status+" Project: "+this.project;
  }
};
export {Todo};


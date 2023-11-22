class Todo{
  constructor(title, description, dueDate, priority, status, project){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.status = status;
    this.project = project;
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
};
export {Todo};


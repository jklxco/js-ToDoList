function displayTasks(taskArray) {
  const container = document.getElementById("main-content");
  const screenBlur = document.getElementById("screen-blur");

  container.innerHTML = "";

  taskArray.forEach((taskObj, index) => {
    let card = document.createElement("div");
    card.dataset.card = "";
    card.dataset.index = index;
    card.dataset.projectName = taskObj.project;

    let paraTask = document.createElement("p");
    paraTask.innerText = taskObj.taskName;
    card.append(paraTask);

    let paraDueDate = document.createElement("p");
    paraDueDate.innerText = taskObj.dueDate;
    card.append(paraDueDate);

    let paraProject = document.createElement("p");
    paraProject.innerText = taskObj.project;
    card.append(paraProject);

    card.dataset.priority = taskObj.priority;

    card.addEventListener("click", (e) => {
      screenBlur.style.display = "flex";
      const longDescription = document.createElement("div");
      longDescription.dataset.longDescription = "show";
      longDescription.innerText = "This is an example long description";
      container.append(longDescription);
    });

    container.append(card);
  });
}

export { displayTasks };

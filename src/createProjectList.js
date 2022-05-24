function createUniqueList(taskArray) {
  const projectContainer = document.getElementById("project-container");
  const allProjectNames = [...new Set(taskArray.map((item) => item.project))];

  allProjectNames.forEach((project) => {
    let listItem = document.createElement("li");
    listItem.dataset.project = "";
    listItem.innerText = project;
    projectContainer.append(listItem);
  });
}

export { createUniqueList };

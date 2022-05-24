import { displayTasks } from "./displayTasks";

function filterProjects(taskArray) {
  const projects = document.querySelectorAll("[data-project]");

  [...projects].forEach((project) => {
    project.addEventListener("click", (e) => {
      const chosenProj = e.target.textContent;
      if (chosenProj === "All") {
        displayTasks(taskArray);
      } else {
        const tempArray = taskArray.filter(
          (taskObj) => taskObj.project == chosenProj
        );
        displayTasks(tempArray);
      }
    });
  });
}

export { filterProjects };

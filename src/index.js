import { displayTasks } from "./displayTasks";
import "./style.css";
import { createObjectArray } from "./createObjArray";
import { filterProjects } from "./filterProjects";
import { createUniqueList } from "./createProjectList";
import { addNew } from "./addNew";

const tasks = [
  ["Do The Dishes", "Today", "Housework", "high"],
  ["Make The Bed", "Today", "Housework", "medium"],
  ["Watch Television", "Tomorrow", "Relax", "low"],
];

let taskArray = createObjectArray(tasks);
createUniqueList(taskArray);
displayTasks(taskArray);
filterProjects(taskArray);
addNew();

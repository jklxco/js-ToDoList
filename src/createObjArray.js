function objectFactory(task) {
  return {
    taskName: task[0],
    dueDate: task[1],
    project: task[2],
    priority: task[3],
  };
}

function createObjectArray(tasks) {
  const returnArray = [];

  tasks.forEach((array) => {
    let tempObject = objectFactory(array);
    returnArray.push(tempObject);
  });

  return returnArray;
}

export { createObjectArray };

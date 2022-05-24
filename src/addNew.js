function addNew() {
  const addNewBtn = document.getElementById("add-new");
  const screenBlur = document.getElementById("screen-blur");
  const container = document.getElementById("main-content");

  addNewBtn.addEventListener("click", (e) => {
    screenBlur.style.display = "flex";
    const addNewForm = document.createElement("div");
    addNewForm.dataset.addNewForm = "show";
    addNewForm.innerText = "Customise The Form For Addding New Tasks Here";
    container.append(addNewForm);
  });
}

export { addNew };

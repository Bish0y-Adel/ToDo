const input = document.querySelector("input");
const btn = document.querySelector(".addTask > button");

btn.addEventListener("click", addList);

input.addEventListener("keyup", (e) => {
  e.keyCode === 13 ? addList(e) : null;
});

function addList(e) {
  const notCompleted = document.querySelector(".notCompleted");
  const Completed = document.querySelector(".Completed");

  const newLi = document.createElement("li");
  const finishBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");
  // const editeBtn = document.createElement("button");

  finishBtn.innerHTML = '<i class="finish" >Finish</i>';
  deleteBtn.innerHTML = '<i class="delete" >Delete</i>';
  // editeBtn.innerHTML = '<i class="edit" >Edit</i>';

  if (input.value !== "") {
    newLi.textContent = input.value;
    input.value = "";
    notCompleted.appendChild(newLi);
    newLi.appendChild(finishBtn);
    newLi.appendChild(deleteBtn);
    // newLi.appendChild(editeBtn);
  }

  finishBtn.addEventListener("click", function () {
    const parent = this.parentNode;
    parent.remove();
    Completed.appendChild(parent);
    finishBtn.style.display = "none";
  });

  deleteBtn.addEventListener("click", function () {
    const parent = this.parentNode;
    parent.remove();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const newForm = document.querySelector("#create-task-form");
  const textBox = document.querySelector("#new-task-description");
  const tasks = document.querySelector("#tasks");
  newForm.addEventListener("submit", e => {
    e.preventDefault();
    const input = textBox.value;
    tasks.insertAdjacentHTML("beforeend", `<li>${input}
      <button>X</button>
    </li>
    `);
  });
  document.querySelector("#list").addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
      event.target.parentElement.remove()
    } else if (event.target.tagName === "LI") {
      console.dir(event.target)
    }
  })
}); 


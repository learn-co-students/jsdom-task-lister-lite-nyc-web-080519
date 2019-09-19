document.addEventListener("DOMContentLoaded", () => {

  const newForm = document.querySelector("#create-task-form");
  const textBox = document.querySelector("#new-task-description");
  const tasks = document.querySelector("#tasks");

  newForm.addEventListener("submit", e => {
    e.preventDefault();
    const input = textBox.value;
    tasks.insertAdjacentHTML("beforeend", 
      `<li>
          ${input}
          <button>X</button>
      </li>`
    );
    newForm.reset()
  });

  tasks.addEventListener("click", e => {
    if(e.target.tagName === "BUTTON"){
      e.target.parentElement.remove();
    }
  });

}); 

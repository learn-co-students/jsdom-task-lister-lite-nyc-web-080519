document.addEventListener("DOMContentLoaded", ()  => {
  const form = document.querySelector("#create-task-form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    let input = document.getElementById("new-task-description").value;
    document.getElementById("new-task-description").value = "";

    document.getElementById("tasks").insertAdjacentHTML("beforeend", `<li>${input} <input type="button" value="x"></li>`)
    document.getElementById("tasks").onclick = function(event) {
      if (event.target.type === "button") {
        event.target.parentElement.remove();
      };
    };

  });

});


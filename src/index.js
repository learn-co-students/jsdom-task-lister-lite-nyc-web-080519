document.addEventListener(“DOMContentLoaded”, () => {
  const form = document.querySelector(“#create-task-form”);
  form.addEventListener(“submit”, function(event){
    //PREVENT LEAVING THE PAGE
    event.preventDefault()
    // 1: CREATE NEW <LI> FOR THE NEW ELEMENT
    // let listItem = document.createElement(“li”);
    // 2: SET UP A VARIABLE REPRESENTATION OF OUR INPUT
    let input = document.getElementById(“new-task-description”).value;
    // 3: AFTER SUBMISSION, SET THE TEXT BOX TO EMPTY
    document.getElementById(“new-task-description”).value = ‘’;
    // 4: PUT THE INPUT STRING INTO THE HTML <LI> WE MADE EARLIER
    // listItem.innerHTML = input;
    // 5: ADD THE <LI> TO THE LARGER COLLECTION OF TASKS
    // document.getElementById(“tasks”).appendChild(listItem);
    // this line accomplishes 1, 4, and 5 all at the same time
    document.getElementById(“tasks”).insertAdjacentHTML(“beforeend”, <li>${input} <input type="button"  value="x"></li>)
    // let deleteButton = document.getElementById(${input})
    document.getElementById(“tasks”).onclick = function(event) {
      if (event.target.type === “button”) {
        event.target.parentElement.remove()
      }
      // document.getElementById(${input}).remove();
    }
  })
 });
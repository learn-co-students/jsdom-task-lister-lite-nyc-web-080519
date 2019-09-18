document.addEventListener("DOMContentLoaded", () => {
  /// grabs the form node
  let formelement = document.querySelector("#create-task-form");
  formelement.addEventListener("submit", function(event) {
    event.preventDefault()
    /// Grabs submitted task name and clears input window
    let newtask = document.querySelector("input").value
    document.querySelector("input").value = ""
    /// crags the page's <ul> node
    const tasks_list = document.querySelector("#tasks");
    /// creates our 'remove task' button with event listener
    let myButton = document.createElement("button");
    myButton.innerText = "X";
    myButton.addEventListener("click", function(e) { e.target.parentElement.remove() });
    /// creates the list item
    const li = document.createElement('li');
    li.innerText = newtask;
    li.appendChild(myButton);
    /// Adds the list item to the <ul>
    tasks_list.appendChild(li);
  });  
})


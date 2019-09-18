document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const submit = document.querySelector("form#create-task-form");
  
  submit.addEventListener("submit", function(event){
    event.preventDefault();

    let ourValue = document.querySelector("input#new-task-description").value
    const list = document.querySelector("#tasks")

    list.insertAdjacentHTML("beforeend", `<li>${ourValue} <button type="button">X</button></li>`)
    
    //reset value of input back to empty after added
    document.querySelector("input#new-task-description").value = "";

    })

    document.querySelector('#list').addEventListener("click", function(e) {
      if (e.target.type === "button") {
        e.target.parentElement.remove();
      }
    })
    
});
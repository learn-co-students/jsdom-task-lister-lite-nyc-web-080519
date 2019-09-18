document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
});

const form = document.getElementById("create-task-form")
const input = document.getElementById("new-task-description")
const container = document.getElementById("tasks")
const button = document.getElementById("deleteButton")
const fullList = document.getElementById("list")

form.addEventListener("submit", function(){
  event.preventDefault()
    container.insertAdjacentHTML("afterbegin", `<li>${input.value}<button id= "deleteButton" >X</button></li>`)
  })


fullList.addEventListener("click", function(e){
  if(e.target.tagName === "BUTTON"){
    e.target.parentElement.remove()
  }
})


//innerhtml 
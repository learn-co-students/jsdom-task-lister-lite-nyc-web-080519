// document.addEventListener("DOMContentLoaded", () => {
//     document.querySelector("#create-task-form").addEventListener("submit", function(event){
//         event.preventDefault()
//         const submission = document.querySelector('#new-task-description').value
//         document.querySelector("#tasks").insertAdjacentHTML(`<li>${submission}</li>`)
//     });
// });

// document.addEventListener("DOMContentLoaded", () => {
//     document.querySelector("#create-task-form").addEventListener("submit", addToList);
//     // we need to put in a reference to a function.. NOT INVOKING IT
// });


// function addToList(event) {
//     event.preventDefault()
//     const submission = document.querySelector('#new-task-description').value
//     document.querySelector("#tasks").insertAdjacentHTML("beforeend", `<li>${submission} <button data-description=${submission}> x </button></li>`)
// }

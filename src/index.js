document.addEventListener("DOMContentLoaded", () => {


  const input_text_field = document.getElementById('new-task-description')
  const input_text_field2 = document.getElementById('new-task-description2')
  const button = document.getElementById('delete')
  const form = document.getElementById('create-task-form')
  const select = document.getElementById('select')


  const listItemContainer = document.getElementById('tasks')


  form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(select.length)
    for(let i=0; i<select.length; i++) {
      console.log(select[i]['selected'])
    }
    // console.log(select[0]['selected'])
    debugger
    if (select[0]['selected']) {
      //style=color: 'red'
    } else if ( ) {

    } else {
      
    }
    listItemContainer.insertAdjacentHTML('beforeend', `
      <li>${input_text_field.value} <button id="delete" type="button">X</button></li> 
    `); 
    input_text_field.value = "";

  });

  document.querySelector("#list").addEventListener("click", function(e){
    if(e.target.tagName === "BUTTON"){
      // console.log("YOU BE TRYNA DELETE")
      e.target.parentElement.remove()
    }
    // e.target.remove()
  })

  // document.querySelector("#list").addEventListener("click", function(e){
  //   if(e.target.tagName === "LI"){
  //     // console.log("YOU BE TRYNA DELETE")
  //     e.target.remove()
  //   }
  //   // e.target.remove()
  // })




});


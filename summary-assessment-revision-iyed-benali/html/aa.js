function addItem(){
    var taskInput = document.getElementById('taskId').value
    var colorInput = document.getElementById('colorId').value
    var ulInput = document.getElementById('list')
 
    if(colorInput ==="red" || colorInput ==="yellow" || colorInput ==="blue" ){
           
    var lsitEl = document.createElement("li")
    lsitEl.textContent=taskInput

    lsitEl.classList.add(colorInput)
    ulInput.appendChild(lsitEl)    
    }
    else{
        alert('put another color')
    }
}
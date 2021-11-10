let firstList = document.getElementById('firstList');
let addBtn = document.getElementById('add');
addBtn.setAttribute('class', 'btn btn-outline-primary');
let secondList = document.getElementById('secondList');
let newInput = document.getElementById('add-new-item');
let error = document.getElementById('error');
let errorMessage = document.createElement('p');

// Version 1

/* addBtn.addEventListener('click', function() {
    
    if (newInput.value === '') {
        error.appendChild(errorMessage);
        errorMessage.innerHTML = "<br>You cannot create empty chores!";
    } else {
        errorMessage.innerHTML = "";
        let newItem = document.createElement('li');
        firstList.appendChild(newItem);

        let input = document.createElement('input');
        newItem.appendChild(input);
        input.value = newInput.value;
        input.disabled = true;
        newInput.value = '';

        let changeBtn = document.createElement('button');
        newItem.appendChild(changeBtn);
        changeBtn.innerHTML = "Change";
        changeBtn.setAttribute('class', 'btn btn-outline-warning');
        changeBtn.addEventListener('click', function() {
            input.disabled = false;
            newItem.replaceChild(saveBtn, changeBtn);
        });
    
        let saveBtn = document.createElement('button');
        saveBtn.innerHTML = "Save";
        saveBtn.setAttribute('class', 'btn btn-outline-warning');
        saveBtn.addEventListener('click', function() {
            if (input.value === '') {
                error.appendChild(errorMessage);
                errorMessage.innerHTML = "<br>You cannot save empty chores!";
            } else {
                errorMessage.innerHTML = "";
                input.disabled = true;
                newItem.replaceChild(changeBtn, saveBtn);
            }
        
    })

        let doneBtn = document.createElement('button');
        newItem.appendChild(doneBtn);
        doneBtn.innerHTML = "Done";
        doneBtn.setAttribute('class','btn btn-outline-success');
        doneBtn.addEventListener('click', function() {
            if (input.value === '') {
                error.appendChild(errorMessage);
                errorMessage.innerHTML = "<br>There is no chore!";
            } else {
                secondList.appendChild(newItem);
                doneBtn.remove();
                changeBtn.setAttribute('class', 'btn btn-warning');
                saveBtn.setAttribute('class', 'btn btn-warning');
                deleteBtn.setAttribute('class', 'btn btn-danger');
            }
        
    })

        let deleteBtn = document.createElement('button');
        newItem.appendChild(deleteBtn);
        deleteBtn.innerHTML = "Delete";
        deleteBtn.setAttribute('class', 'btn btn-outline-danger');
        deleteBtn.addEventListener('click', function() {
        newItem.remove();
    })
    }

});

let resetBtn = document.getElementById('reset');
resetBtn.setAttribute('class', 'btn btn-outline-dark');
resetBtn.addEventListener('click', function() {
    while (firstList.firstChild) {
        firstList.removeChild(firstList.firstChild);
    }
    while (secondList.firstChild) {
        secondList.removeChild(secondList.firstChild);
    }
    errorMessage.innerHTML = "";
}) */


// Version 2

addBtn.addEventListener('click', function() {
    if(newInput.value === '') {
        error.appendChild(errorMessage);
        errorMessage.innerHTML = "<br>You cannot create empty chores!";
    } else {
        errorMessage.innerHTML = "";
        let newItem = document.createElement('li');
        firstList.appendChild(newItem);

        let input = document.createElement('input');
        newItem.appendChild(input);
        input.value = newInput.value;
        input.disabled = true;
        newInput.value = '';

        let Buttons = function(name, className) {
            this.name = name;
            this.className = className;
            var button = document.createElement('button');
            this.button = button;
        
            this.create = function() {
                button.type = 'button';
                button.innerHTML = name;
                newItem.appendChild(button);
                button.className = className;
            }
        };

        var changeBtn = new Buttons('Change', 'btn btn-outline-warning');
        changeBtn.create();
        //changeBtn.setAttribute('class', 'btn btn-outline-warning');
        changeBtn.button.onclick = function() {
            input.disabled = false;
            this.remove();
            saveBtn.create();
        }

        var saveBtn = new Buttons('Save', 'btn btn-outline-warning');
        //saveBtn.setAttribute('class', 'btn btn-outline-warning');
        saveBtn.button.onclick = function() {
            if (input.value === '') {
                error.appendChild(errorMessage);
                errorMessage.innerHTML = "<br>You cannot save empty chores!";
            } else {
                errorMessage.innerHTML = "";
                input.disabled = true;
                this.remove();
                changeBtn.create();
            }
        }

        var doneBtn = new Buttons('Done', 'btn btn-outline-success');
        doneBtn.create();
        //doneBtn.setAttribute('class','btn btn-outline-success');
        doneBtn.button.onclick = function() {
            if (input.value === '') {
                error.appendChild(errorMessage);
                errorMessage.innerHTML = "<br>There is no chore!";
            } else {
                secondList.appendChild(newItem);
                this.remove();
                //changeBtn.setAttribute('class', 'btn btn-warning');
                //saveBtn.setAttribute('class', 'btn btn-warning');
                //deleteBtn.setAttribute('class', 'btn btn-danger');
            }
        }

        var deleteBtn = new Buttons('Delete', 'btn btn-outline-danger');
        deleteBtn.create();
        //deleteBtn.setAttribute('class', 'btn btn-outline-danger')
        deleteBtn.button.onclick = function() {
            newItem.remove();
        }
    }
})

let resetBtn = document.getElementById('reset');
resetBtn.setAttribute('class', 'btn btn-outline-dark');
resetBtn.addEventListener('click', function() {
    while (firstList.firstChild) {
        firstList.removeChild(firstList.firstChild);
    }
    while (secondList.firstChild) {
        secondList.removeChild(secondList.firstChild);
    }
    errorMessage.innerHTML = "";
})



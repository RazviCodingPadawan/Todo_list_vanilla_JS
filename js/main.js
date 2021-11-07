let firstList = document.getElementById('firstList');
let addBtn = document.getElementById('add');
let secondList = document.getElementById('secondList');
let newInput = document.getElementById('add-new-item');
let error = document.getElementById('error');
let errorMessage = document.createElement('p');

addBtn.addEventListener('click', function() {
    
    if (newInput.value === '') {
        error.appendChild(errorMessage);
        errorMessage.innerHTML = "You cannot create empty chores!";
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
    
        let saveBtn = document.createElement('button');
        saveBtn.innerHTML = "Save";
        saveBtn.addEventListener('click', function() {
            if (input.value === '') {
                error.appendChild(errorMessage);
                errorMessage.innerHTML = "nu ai voie sa salvezi casute goale";
            } else {
                errorMessage.innerHTML = "";
                input.disabled = true;
                newItem.replaceChild(changeBtn, saveBtn);
            }
        
    })

        changeBtn.addEventListener('click', function() {
        input.disabled = false;
        newItem.replaceChild(saveBtn, changeBtn);
    });

        let doneBtn = document.createElement('button');
        newItem.appendChild(doneBtn);
        doneBtn.innerHTML = "Done";
        doneBtn.addEventListener('click', function() {
        secondList.appendChild(newItem);
        doneBtn.remove();
    })

        let deleteBtn = document.createElement('button');
        newItem.appendChild(deleteBtn);
        deleteBtn.innerHTML = "Delete";
        deleteBtn.addEventListener('click', function() {
        newItem.remove();
    })
    }

});

let resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', function() {
    document.getElementById('firstList').remove();
    document.getElementById('secondList').remove();
    errorMessage.innerHTML = "";
})

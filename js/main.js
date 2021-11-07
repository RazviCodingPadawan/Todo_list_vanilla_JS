/* let main = document.getElementById('content'); */
/* let btn = document.getElementById('add');

btn.addEventListener('click', function() {
    let newSection = document.createElement('section');
    newSection.id = 'first-section';
    console.log(newSection);
    document.getElementById('content').append(newSection);
}) */

/* let main = document.getElementById('content');


let btn = document.getElementById('add');
btn.addEventListener('click', function() {
    let newList = document.createElement('section');
    newList.innerHTML = '<h2 id="toDO">Chores to be done (pending)</h2>';
    newList.innerHTML += '<div class="list</div>">';
    console.log(newList);
    main.appendChild(newList);
}) */

/* var input = document.getElementById('add-new-item');
let btn = document.getElementById('add');
btn.addEventListener('click', function(e){
    e.target.parentNode.sElementChild.remove();
}) */

let firstList = document.getElementById('firstList');
let addBtn = document.getElementById('add');
let secondList = document.getElementById('secondList');

addBtn.addEventListener('click', function() {
    let newItem = document.createElement('li');
    firstList.appendChild(newItem);

    let newInput = document.getElementById('add-new-item');

    let input = document.createElement('input');
    newItem.appendChild(input);
    input.placeholder = newInput.value;
    input.disabled = true;

    let changeBtn = document.createElement('button');
    newItem.appendChild(changeBtn);
    changeBtn.innerHTML = "Change";
    
    let saveBtn = document.createElement('button');
    saveBtn.innerHTML = "Save";
    saveBtn.addEventListener('click', function() {
        input.disabled = true;
        newItem.replaceChild(changeBtn, saveBtn);
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

   //firstList.innerHTML += '<li><input type="text" disabled> <button id="change">Change</button><button id="done">Done</button><button id="delete">Delete</button></li>';
});



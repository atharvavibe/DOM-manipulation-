var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);  
itemList.addEventListener('click', removeItem);

function addItem(e){
    e.preventDefault();

//Get input value
var newItem = document.getElementById('item').value;

//Create new li element
var li = document.createElement('li');

// add className
li.className = 'list-group-item';

// Add text node with input value
li.appendChild(document.createTextNode(newItem));

itemList.appendChild(li);

// create delete button
var deleteBtn = document.createElement('button');

// add class name 
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

// Append text node 
deleteBtn.appendChild(document.createTextNode('X'));

// Append button to li
li.appendChild(deleteBtn);

var editBtn = document.createElement('button');
editBtn.className = 'btn';
editBtn.appendChild(document.createTextNode('Edit'));
li.appendChild(editBtn);
console.log(editBtn);

}

function removeItem(e){
 
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }


}

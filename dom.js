// GET ELEMENT BY ID 
var li = document.getElementsByTagName('list-group-item');
console.log(li);
console.log(li[1]);
li[1].textContent = 'hello';
li[1].style.fontWeight = 'bold';
for(var i=0; i<li.length; i++){
    li[i].style.backgroundColor = 'green';
}

for(var i=0; i<li.length; i++){
    li[i].style.fontWeight = 'bold';
}

// QUERY SELECTOR
var header = document.querySelector('main-header');
header.style.borderBottom = 'solid 6px #ccc';


var input = document.querySelector('input');
input.value = 'Hello there';

var submit = document.querySelector('input[type = "submit"]');
submit.value = 'Send';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'green'; 
var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.backgroundColor = 'white'; 

// QUERY SELECTORALL
var secondListitem = document.querySelectorAll('.list-group-item:nth-child(2)');
secondListitem.style.color = 'green';

var odd = document.querySelectorAll('.li:nth-child(odd)');
for(var i = 0; i<odd.length; i++){
    odd[i].style.backgroundColor = 'green';
}


// TRAVERSING DOM
var itemList = document.querySelector('#items');
// parentNode 
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';

// childNode
console.log(itemList.childNodes); 
console.log(itemList.children);

// firstElementChild

console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello';

// lastChild
console.log(itemList.lastChild);

// lastElementChild

console.log(itemList.lastElementChild);

// nextSibling
console.log(itemList.nextSibling);

// nextElementSibling
console.log(itemList.nextElementSibling);

// previousSibling
console.log(itemList.previousSibling);

// previousElementSibling
console.log(itemList.previousElementSibling);

// createElement
var newDiv = document.createElement('div');

// add class name
newDiv.className = 'hello';

// add id
newDiv.id = 'hello1';

// set attribute
newDiv.setAttribute('title', 'hello div');

// create text node
var newDivText = document.createTextNode('Hello World');

// Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

container.insertBefore(newDiv,h1);


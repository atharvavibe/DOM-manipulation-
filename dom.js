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

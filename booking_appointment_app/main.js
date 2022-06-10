var form = document.getElementById('my-form');
var info = document.getElementById('name');
var email = document.getElementById('email');

form.addEventListener('submit', store);

function store(e){
    e.preventDefault();
    localStorage.setItem(info, email);
}

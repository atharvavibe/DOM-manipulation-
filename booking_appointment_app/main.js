var form = document.getElementById('my-form');
var info = document.getElementById('name');
var email = document.getElementById('email');

let obj = {
    name : info,
    emailId : email
};

let myObj = JSON.stringify(obj);

form.addEventListener('submit', store);

function store(e){
    e.preventDefault();
    localStorage.setItem("myObj", myObj);
}

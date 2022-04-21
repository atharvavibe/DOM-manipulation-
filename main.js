// OBJECTS IN JAVASCRIPT
// const person = {
  
//   firstName:'Jake',
//   lastName: 'Parker',
//   age: 25,
//   hobbies: ['football', 'movies', 'sketching'],
//   address:{
//       street: '50 main st',
//       city: 'Boston',
//       state : 'MA'
//   }
// }


// const {age, address: {state} } = person;

// console.log(age);
// console.log(state);

// Arrays

// const todos = [

// {
//  id : 1,
//  task:'take out the trash',
//  isComplete: true
// },

// {
//     id : 2,
//     task:'project submission',
//     isComplete: true
//    },


//    {
//     id : 3,
//     task:'chilling with buddies',
//     isComplete: false
//    },


// ]


//  for(let i=0; i<todos.length; i++){
//      console.log(todos[i].id);
//  }


// FUNCTIONS IN JAVASCRIPT
// const convertCtoK = (temp)=> {
// console.log(273+temp+'k');
// }

// convertCtoK(27,'c');

// CONSTRUCTORS IN JAVASCRIPT

// function Student(firstName, lastName, rollNum, sex, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.rollNum = rollNum;
//     this.sex = sex;
//     this.dob = new Date(dob);
//     this.getFullName = function(){
//         return `${this.firstName} ${this.lastName}`;
//     }
//     this.getBirthYear = function(){
//         return this.dob.getFullYear();
//     }
    
//         var age = today.getFullYear() - this.getBirthYear();
    
// }

// const isEligible =(age)=>{

//     if(age<25)
//      console.log('Eligible');

//      else
//      console.log('Not Eligible');

// }

// const student1 = new Student('James', 'Roger', 1, 'male', '4-3-2000');
// const student2 = new Student('Rachel','Green', 2, 'female', '8-10-1970');
// isEligible(student1.age);
// console.log(student2.getFullName());
// console.log(student2.getBirthYear());

// CLASSES IN JAVASCRIPT
// class Person{
//     constructor(firstName, lastName, dob){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }

//     getBirthYear(){
//         return this.dob.getFullYear;
//     }

//     getFullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
// // Instantiating object
// const person1 = new Person('Jane', 'Doe', '4-3-1980');
// const person2 = new Person('Jake', 'Drake', '3-6-1970');

// console.log(person1);
// console.log(person2);


// INHERITANCE IN JAVASCRIPT

// class Users{
//     constructor(userName, email, password){
//         this.userName = userName;
//         this.email = email;
//         this.password = password;

       

//     }
  
//     register(){
//         console.log(`${this.userName} is now registered`);
//     }
     
//     countUsers(){
//         let i = 0;
//         i++;
//         console.log(`There are ${i} users`);

//     }

// }

// let bob = new Users('bob', 'bob@gmail.com', '12345');
// bob.register();
// bob.countUsers();

// class Member extends Users{
//     constructor(userName, email, password, memberPackage){
//         super(userName, email, password);
//         this.memberPackage = memberPackage;
        

//     }

//     membershipValidity(){
//         var myDate = new Date();
//         var validityDate = new Date();
//         validityDate.setDate(myDate.getDate()+30);
//         console.log(`Your free subscription is till ${validityDate}`);

//     }

//     renewMembership(subscriptionType){
//         var today = new Date();
//         var renewedDate = new Date();
//         if(subscriptionType == '1 month'){
//         renewedDate.setDate(today.getDate()+30);
//         console.log(`Membership renewed till ${renewedDate}`);
//         }

//         else if(subscriptionType == '1 year'){
//         renewedDate.setDate(today.getDate()+365);
//         console.log(`Membership renewed till ${renewedDate}`);
//         }
 
//     }

//     getPackage(){
//         console.log(`${this.userName} is subscribed to ${this.memberPackage} package`);
//     }
// }

// let mike = new Member('Mike', 'mike@gmail.com', '123', 'standard');
// mike.getPackage();
// mike.membershipValidity();
// mike.renewMembership('1 year');

// Document Object Manipulation

// const ul = document.querySelector('.items');
// ul.firstElementChild.textContent = 'Hello'
//  ul.firstElementChild.style.background = 'green';
//  ul.children[1].style.background = 'yellow';

// Events

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', e => {

//     e.preventDefault();
//     console.log(e.target.className);

// });
//  btn.addEventListener('mouseover', f => {

//       f.preventDefault();
//       console.log(f.target.className);


//  });

//  btn.addEventListener('mouseout', f => {

//     f.preventDefault();
//     console.log(f.target.className);


// });

// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');

// myForm.addEventListener('submit', onSubmit);

// function onSubmit(e){
   
//     e.preventDefault();
//     console.log(nameInput.value);
//     console.log(emailInput.value);
// }





 

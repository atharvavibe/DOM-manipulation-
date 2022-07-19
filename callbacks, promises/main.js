const posts = [
    {title: 'Post One', body:'This is post one' },
    {title: 'Post Two', body:'This is post two'},
    {title: 'Post three', body:'This is post three' },
    {title: 'Post four', body:'This is post four' },
    {title: 'Post five', body:'This is post five' },
    {title: 'Post six', body:'This is post six' }

];

function getPost(){
    setTimeout(()=>{
    
        let output = '';
        posts.forEach(post => {
            output += `<li>${post.title} </li>`
        

         document.body.innerHTML = output;
        },1000);
        });
        
            
}

function createPost(post){

    return new Promise((resolve, reject) =>{

        setTimeout(()=>{
            posts.push(post);
           var error = false;
           if(!error){
            resolve();
           }
           else{
            reject();
           }
           }, 3000);  
    }); 

}

// createPost({title:'Post three', body:'This is post three'}).then(getPost);
 

function deletePost(){
    return new Promise((resolve, reject)=>{

        posts.length = 0;
        if(posts.length != 0)
        resolve();
        else
        reject("Error");
    });
}

deletePost().then(getPost).catch(err=> console.log('Error: Array is empty'));


// using promise (async await)

console.log('person 1: shows ticket');
console.log('person 2: shows ticket');

const promiseWifeBringingTicks = new Promise((resolve, reject)=>{

    setTimeout(()=>{

        resolve('ticket');
    }, 3000)
});

const getPopcorn = promiseWifeBringingTicks.then((t) => {
console.log('husband: we should go in');
console.log('wife: no i am hungry');
return new Promise((resolve, reject)=> resolve(`${t} popcorn`));
});

const getButter = getPopcorn.then((t) => {
console.log('husband: we should go in');
console.log('wife: no i need butter on my popcorn');
return new Promise((resolve, reject)=> resolve(`${t} butter`));
});

const getColdDrinks = getButter.then((t)=> {
    console.log(`husband: i got cold drinks for you `);
    return new Promise((resolve, reject) =>resolve(`${t} cold drinks`) );
});

getColdDrinks.then((t) => console.log(t));

console.log('person 4: shows ticket');
console.log('person 5: shows ticket');


// using async await
console.log('person 1: shows ticket');
console.log('person 2: shows ticket');

const preMovie = async ()=> {


    const promiseWifeBringingTicks = new Promise((resolve, reject)=>{

            setTimeout(()=>{
        
                resolve('ticket');
            }, 3000)
        });

        const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
        const addButter = new Promise((resolve, reject) => resolve(`butter`));
        const getColdDrinks = new Promise((resolve, reject) => resolve(`cold drinks`));
        let ticket = await promiseWifeBringingTicks;
        console.log('wife : i have the tickets');
        console.log('husband: we should go in');
        console.log('wife: no iam hungry');

        let popcorn = await getPopcorn;

        console.log(`husband: i got some ${popcorn}`);
        console.log('husband: we should go in');
        console.log('wife: I need butter on my popcorn');

        let butter = await addButter; 
        console.log(`husband: i got some ${butter} on popcorn`);


        let coldDrinks = await getColdDrinks;
        console.log(`husband: i got ${coldDrinks} for you`);
        return ticket;
};


preMovie().then((m) => console.log(`person 3: shows ${m}`));


console.log('person 4: shows ticket');
console.log('person 5: shows ticket');


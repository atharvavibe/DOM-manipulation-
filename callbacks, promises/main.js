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

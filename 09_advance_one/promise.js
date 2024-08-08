// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// To learn about the way promises work and how you can use them, we advise you to read Using promises first.

// --> A Promise is an object representing the eventual completion or failure of an asynchronous operation. Since most people are consumers of already-created promises, this guide will explain consumption of returned promises before explaining how to create them.

// Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function. Imagine a function, createAudioFileAsync(), which asynchronously generates a sound file given a configuration record and two callback functions: one called if the audio file is successfully created, and the other called if an error occurs.

// Description
// A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

// consume krna and create krna 2 kaam hote hia promises ke.


// -------------------------------------------
const promiseOne = new Promise(function(resolve,reject){
    // do an async tasks for example--> DB calss, cryptography, network.
    setTimeout(function(){
        console.log('async task is complete');
        resolve();
    },1000);
});
// create kar diye now consume karenge
// 'resolve' method connect hota hai 'then' ke sath
promiseOne.then(function(){
    console.log('Promised consumed');
});
 // ----------------------------------------
// another way of writing an promise
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("asyc task 2 ")
//         resolve();
//     },1000)
// }).then(function(){
//     console.log('promise 2 resolved');
// })

// ---------------------------------
const promiseThree = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve({username:"syna",email:"xyz@exmaple.com"})
        },1000)
})
promiseThree.then(function(user){
    console.log(user);
    console.log('promise 3 is consumed')
})



// resolve ke andar jo bhi paramter pass krte hia voh '.then' use krne hume mil jata hai.
// ----------------------------------------------
const promiseFour= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error) resolve({username : 'syna.',password:"2052002"})
            else reject('user not found')
    },1000)
})
const username=promiseFour.then((user)=>{
    // callback hell ke kaise bache
    console.log(user)
    return user.username
}).then(function(username){
    console.log(username);
}).catch(function(error){
    console.log('error')
}).finally(function(){
    console.log('the promise is resolved ya fir code fat geya hai ')
})
// this is called chaining.

// -------------------------------

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error) resolve({username : 'syna batra',password:"2052002"})
            else reject('error is promise 5')
    },1000)

});
// 2 way of a then
async function consumePromiseFive() {
    try{
        const response=await promiseFive
    console.log(response);
    }
    catch{
        console.log('error aya hai in promise 5');
        
    }
    
}
consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.

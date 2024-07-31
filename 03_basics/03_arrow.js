//arrow function and this keyword

const user={
    name:"agam",
    price:900,
    welcome : function(){
        console.log(`${this.name} welcome, jee aya nu`);
        console.log(this)
    }

}
// user.welcome()
// user.name="syna"
// user.welcome()
// console.log(this);

// function chai(){
//     console.log(this);
// }
// chai()



//arrow function
const chai=() =>{
    username:"agam",
    console.log(this);
}
//chai()

const addone=(n1,n2)=> {
    return n1-n2;
}
console.log(addone(21,22));

const addtwo=(n1,n2) => (n1+n2) // another version of writing, sara code ek line meh hona chiaye and return statement ki need nahi padhegi fir.
console.log(addtwo(21,22)); 


const one =(username)=>( {name:`${username} is the user here`});
console.log(one("agam"));
// agar object ko return krna ho toh parenthesis use krni padhegi & return statement ko avoid bhi kiya ja skt hai by using the above method. 

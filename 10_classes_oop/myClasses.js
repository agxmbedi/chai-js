//ES6 baad ki kahani hai
class user{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
 // jese hi class se ek naya object intialise hohga tabhi constructor call hoga
    // new keyword ka use krte hi 

    }
   // ek method
    encryptPassword(){
        return `${this.password} abc`
    }
    changeUser(){
        return `${this.username.toUpperCase()}`;
    }

  
}
const user1= new user("agam","agam@.com","123");
console.log(user1.encryptPassword())
console.log(user1.changeUser());



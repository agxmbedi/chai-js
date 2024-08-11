class user{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`username : ${this.username}`);
    }
     static createId(){
        return `123`
         // static ka use hai ki har object ko es method ka access nahi dena chahta hu kain toh i will use static 
    }
}

const agam= new user("agam")
//console.log((agam.createId()));

class teacher extends user{
    constructor(username,email){
        super(username)
        this.email=email;
    }
}

const iphone= new teacher("iphone","abc@gmail.com")
iphone.logMe()
console.log(iphone.createId());


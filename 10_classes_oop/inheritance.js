class user{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username is ${this.username} `);
        
    }
}
class teacher extends user{
    constructor(username,email,password){
        super(username);
        this.email=email;
        this.password=password;
    }
    addCourse(){
        console.log(` a new course was added by an ${this.username} `);
    }
}
const one =  new teacher("syna","syna20052002@gmail.com","123");
console.log(one.addCourse())
const user1= new user("agam")
user1.logMe()
one.logMe()


console.log(one instanceof user);

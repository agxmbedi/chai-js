const user={
    username : 'agam',
    login:3,
    signed:true,

    getUserDetails : function(){
        console.log('got the details');
        console.log(`${this.username}`);
    }
}
//console.log(user.login)
//console.log(user.getUserDetails())
// this. ka mtlb current context ki baat ho rahi hai 

//console.log(this) // this is global context object jo bhi , yeh browser meh change ho jayegi , emse hame window objects millenge , as of now hum esko node broswer meh use kar rahe hai ess liye empty milla hai hume

// const promise= new Promise()
// const date = new Date()
// 'new 'keyword ka use hota hai naya context/instance banan ke liye

function User(username,loginCount,isLoginedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoginedIn=isLoginedIn;
//left wala 'username' == variable hai and right wala 'username' == jo value pass kar rahe ho

this.greeting = function(){
    console.log(`welcom ${this.username}`);
}
return this
}

const userone= new User('agam',22,true);
const usertwo= new User('syna',22,false);
// use 'new' for new instances otherwise purani varibles me naye values overwrite ho jayegi
console.log(userone);
//console.log(usertwo);

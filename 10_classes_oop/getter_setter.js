class user{
    constructor(email,password){
        this.email=email,
        this.password=password
    }
    get password(){
        //return this._password.toUpperCase()
        return `this is a your password : ${this._password}`
    }
    set password(value){
        this._password=value
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(val){
        return this._email=val
    }
    
}
const agam= new user('agam@gmail.com','abc')
console.log(agam.password);
console.log(agam.email);


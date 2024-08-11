function setUser(username){
    this.username=username;
    console.log("called")
}
function createUser(username,email,password){
    setUser.call(this,username)
    // variable hold krne ke liye '.call' jaruri hai lagan vrna upar wala functiion nahi call hoga.
    // and use 'this' to access that variable in upper function
    this.email=email;
    this.password=password
}
const chai = new createUser('chai','chia@Fb.com',"123")
console.log(chai);
function multiple5(num){
    return num*5;
}
// functions ko hum as object bhi treat kar skte hai, prototype use hota hai custom objects banan meh
multiple5.power=3;
console.log(multiple5(5));
console.log(multiple5.power);
console.log(multiple5.prototype);

function user(username,score){
    this.username=username;
    this.score=score;
}
// prototype ka use krte hum apna method bana skte hai , custom method
user.prototype.increment = function(){
    this.score++;
}
user.prototype.printme=function(){
    console.log(`score is of ${this.username} is  ${this.score}`);
}
// 'this' ka mtlb -> jis ne bhi puchha 
const agam=new user('agam',23);
const syna= new user('syna',22);

syna.printme()


// some notes on new keyword

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

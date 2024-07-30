function printName(){
    console.log("agam")
}
printName() 
function add(num1,num2){ //parameters
   console.log( num1+num2);
}
// add(11,10840)//arguments

function add(num1,num2){ //parameters
    let ans=num1+num2
    return ans
// return num1+num2
 }
 const ans=add(5,11)
//  console.log("result : ",ans)

function login(username){
    if(username===undefined){
        console.log("user not valid");
        return
    }
    return `${username} just logged in`
}
console.log(login("agam"))
console.log(login())
function cart(...item){ //(...) is a REST OPERATOR jo ki multiles values ko ek array meh store kar deta hai , use hota hia agar no of arguments zyada  ho .
    return item
}
console.log(cart(400,500,600))

const user={
    name:"agam",
    price: 200
}
function items(anyobject){
    console.log(`username if ${anyobject.name} and daam hai ${anyobject.price}`);
}
items(user)

const arr=[100,200,300]
function val(array){
    return array[1]

}
console.log(val(arr))
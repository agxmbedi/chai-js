//var c = 300
let a = 300
const b =101
if (true) {
     a = 10
     const b = 20
     console.log("INNER: ", a);
     console.log("INNER: ", b);

    
}
console.log(a)
console.log(b)

// var esse liye ue nahi krna chiye kyuki voh ek Global variable ban jata hia jinka scope thoygh code chala jata hia, always use let and const 
// {}...enke ander

// console.log(a);
// console.log(b);
// console.log(c);


// NESTED SCOPE
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


//console.log(addone(5))

function addone(num){
    return num + 1
}



//addTwo(5)
const addTwo = function(num){
    return num + 2
}

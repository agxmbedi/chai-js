const descriptor=Object.getOwnPropertyDescriptor(Math,"PI");
console.log(descriptor);

const chai ={
    name:"tulsiChaa",
    writable:true,

    orderChai:function(){
        console.log("chai nahi bani")
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
Object.defineProperty(chai,'name',{
    //writable:false,
    enumerable:true
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// for (const [key,value] of chai) {
//     console.log(`${key} : ${value}`)   
// }
for (const [key,value] of Object.entries(chai)) {
    if(typeof value!== 'function'){
    console.log(`${key} : ${value}`)   
    }

}



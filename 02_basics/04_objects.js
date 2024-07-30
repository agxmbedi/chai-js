// const user = new Object()
// console.log(user)
// // singleton object yeh hota hai , yeh ek single object hai
// // const user2={} // non singleton object
// // console.log(user2)
// // user2.name="maya"
// // user2.is=231
// // console.log(user2)

// const regularUser={
//     email: "agam@gmail.com",
//     fullname:{
//         userName:{
//             first:"agam",
//             last:"bedi"
//         }
//     }
// }
// console.log(regularUser.fullname.userName)
// const obj1={1:"a",2:"b"}
// const obj2={3:"c",4:"d"}
// // const obj3={obj1,obj2}
//  const obj3=Object.assign({},obj1,obj2)
// console.log(obj3)

const course={
    name:"js in hindi",
    price:"101",
    teacher:"agam"
}
//const{teacher}=course // de structuring 
const{teacher : chu}=course // de structuring -> naam bhi change kar skte hai hum

console.log(chu);


//json
{
    "name":"agambediAPI",
    "age" : "22"
}
//json formatter

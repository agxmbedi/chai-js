const nums=[1,2,3]
// const val=nums.reduce(function (acc,cur) {
//     console.log(`acc : ${acc} and cur : ${cur}`);
//     return acc + cur;
// },0)
//console.log(val)
const value =nums.reduce((acc,cur)=>{
    return acc + cur;
},0)
console.log(value);

const shoppingCart=[
    {
        name:"js course",
        price: 6900
    },
    {
        name:"java course",
        price: 6990
    },
    {
        name:"Python course",
        price: 6969
    },
]
const val=shoppingCart.reduce((acc,item)=>(acc +item.price ),0);
// yeh ek imp way hai use hota hia shopping cart meh , acc meh item ki current value store hoti rehti hai.
console.log(val)
const nums=[1,2,3,4,5,6,7,8,9,10]
const val=nums.map((num)=> num + 5)


// this is called chaining
const newnums=nums
                .map((n)=> n * 10)
                .map((n)=> n+1 )
                .filter((n)=> n >=69)

console.log(newnums)
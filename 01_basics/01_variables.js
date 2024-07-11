const accountId =2413
let accountEmail="agaam@gmail.com"
var accountPassword="2413"
accountCity = "Aps"
let accountState;

//accountId=2 
// this is not allowed
accountEmail="bedi@gmail.com"
accountPassword="2413"
accountCity="Chd"
console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
/*
prefer not to use var
always use let becuase of block scope issue and functional scope
*/
// always use the let over var.
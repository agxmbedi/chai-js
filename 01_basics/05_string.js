const name="agam"
const BodyCount=2
//console.log(name + repoCount) - oudated 
console.log(`hello there my name is ${name} and my body count is ${BodyCount}`);
// string decralation
const gameName=new String('AgamCOC');
console.log(gameName[3])
console.log(gameName.toUpperCase())
// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));
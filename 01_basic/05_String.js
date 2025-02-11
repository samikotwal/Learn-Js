const name = "sami"
const repoCount = 10

console.log(name + repoCount + "Value")

console.log(`hello my name is ${name} and  my repo count is ${repoCount}`);

const gameName = new String ('sami')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.toLowerCase())
 
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const sam = gameName.substring(0,2)
console.log(sam);

const samm = gameName.slice(-3,2)
console.log(samm);

const NewString = "  sami  "
console.log(NewString);
console.log(NewString.trim());

const url = "https://sami.com/sam%2kotwal"
console.log(url.replace('%2' ,'-'));

console.log(url.includes('sam'));

console.log(gameName.split('sa'));









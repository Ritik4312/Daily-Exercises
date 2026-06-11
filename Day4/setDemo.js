const names = new Set(["Ram","Shyam","Mohan","Ram"]);

names.add("Aaby")
console.log(names);
for(const name of names){
    console.log("The name is: -",name);
}
// to check if element exist in the set
console.log("Is Ram exist in Set",names.has("Ram"));
// To check the size of the set
console.log("Size of the set:- ",names.size);
// get all values of the set
const myIterator = names.values();
console.log(myIterator);
// Get all the keys
const myIterator1 = names.keys();
console.log(myIterator1);
// get the entries

const myIterator2 = names.entries();
console.log(myIterator2);



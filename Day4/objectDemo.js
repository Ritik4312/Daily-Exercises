// // way 1:- assigning the value while creating
// const Student = {
//     name:"Ram",
//     DOB:"12/12/2007",
//     age:20
// }
// console.log(Student.name);
// console.log(Student.DOB);
// console.log(Student.age);

// // Way 2:- Assigning the values later
// const Student = {};
// Student.name = "Ram";
// Student.DOB = "12/12/2007";
// Student.age = 20;

// // Way 3:- using new Keyword
// const Student = new Object();
// Student.name = "Ram";
// Student.DOB = "12/12/2007";
// Student.age = 20;

// const Student = new Object({ name: "Ram", DOB: "12/12/2007", age: 20 });

// Access the Object
const Student = {
    name:"Ram",
    DOB:"12/12/2007",
    age:20,
    getName:function(){
        let name = "Hello"+this.name+"!";
        return name;
    }
}

console.log(Student.name); //dot Notation
console.log(Student["DOB"]); // Bracket Notation
console.log(Student["age"]); 
//Student.getxx();
console.log("name ="+Student.getName());
// to get the values from the object
const data = Object.values(Student)
console.log("From the value function"+data.toString());
// to get the entries from the Object
const enteries = Object.entries(Student)
console.log("from enteries function",enteries.toString());
// to get the keys
const keys = Object.keys(Student)
console.log("from keys function",keys.toString());


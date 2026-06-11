// // //Way 1
// // const Person = new Map()
// // Person.set("Ram",25)
// // Person.set("Shyam",26) 
// // Person.set("Mohan",27)
// // console.log(Person);

// //Way 2
// const Person = new Map([["Ram",25],["Shyam",26],["Mohan",27]])
// Person.set("Ram1",25)
// Person.set("Shyam1",26)
// console.log(Person);
// // Get Method
// console.log(Person.get("Ram"));


const Student =  {}
const StudentInfo = new Map();
for(let i=0; i<3;i++){
    Student.name = "Ram";
    Student.age = 20;
    StudentInfo.set(i,Student);
}
for(const s of StudentInfo){
    console.log(s);
}
console.log(StudentInfo)
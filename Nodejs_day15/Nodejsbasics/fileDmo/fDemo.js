
const { log } = require("console");
const fs = require("fs");
// access different paths in out APPLICATION
const path = require("path");

// Read the file 
console.log("current path:- ",__dirname);

// join the file name with the path
const filepath = path.join(__dirname,"/assets/demoNode.txt");
console.log(filepath);
// create File and write the text 
fs.writeFile(filepath,"Hello Nodejs",(err)=>{
    if(err){
        console.log(err);
    }   
    console.log("File Created");
});

fs.appendFile(filepath,"\nHello New Data added",(err)=>{
    if(err){
        console.log(err);
    }   
    console.log("File Updated");
})


const mydata = fs.readFileSync("text.txt","utf8");

console.log(mydata.toString());
module.export = mydata; 
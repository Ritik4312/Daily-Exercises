// http server
const http = require("http");
// File assess
const fs = require("fs");
// Feth the data from the file 
const mydata = fs.readFileSync(".//fileDmo//assets//demoNode.txt","utf8");

console.log(mydata.toString());

http.createServer((req,res)=>{
    res.writeHead(200,{"Context-type":"text/plain"})
    // Print it on the blowser
    res.end(mydata
    );
}).listen(8080,()=>{
    console.log("Server is running on port 8080")
})

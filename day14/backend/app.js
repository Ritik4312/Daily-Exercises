// Http Module is called to create basic server.
const http = require('http');
// File System module of the node js. FS is responsible to read the file and update the fiel
const fs = require('fs');
let myData;
// Reading the data from the file
const data = fs.readFileSync("./assets/myFile.txt","utf8");
console.log(data);
// fs.readFile("./assets/myFile.txt","utf8",(err,d1)=>{
//     console.log(d1);
//     myData = d1;
// })
// // Server is created 
http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data)
}).listen(8080,() => {
    console.log("App is running on port 8080")
});
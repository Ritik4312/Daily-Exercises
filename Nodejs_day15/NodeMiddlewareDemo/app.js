const http = require('http');
const fs = require('fs');
// Middleware function
const logger = require("./loggers/logger");
const auth = require("./loggers/auth");

// Events 
const EventEmitter = require('events');

// Creating an object of event
const event = new EventEmitter();

// Event Listener
event.on("userRequest",(url) =>{
    console.log(`Event Triggered for :${url}`)
})

// API Handler
function hadleRequest(req,res){
    if(req.url ==='/' && req.method === 'GET'){
        fs.readFile("./UI/index.html",(err,data) =>{
            if(err){
                res.writeHead(500,{'Content-Type':'text/plain'});
                res.end("Internal Server Error");
                return;
            }
        res.writeHead(200,{'Content-Type':'text/HTML'});
        res.end(data);
        });
    }       
    else if(req.url ==='/users' && req.method === 'GET'){
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(
            JSON.stringify({
                id:1,
                name:'John Doe'
            })
        );
    }
    else{
        res.writeHead(404,{'Content-Type':'text/plain'});
        res.end("Not Found");
    }
}

// Middleware Execution
function middleware(req,res){
    logger(req,res,() =>{
        event.emit("userRequest",req.url);
        auth(req,res,() =>{
            hadleRequest(req,res);
    });
})
}
// const server = http.createServer((req,res) =>{
//     if(req.url ==='/'){
//         res.end("Home")
//     }
//     else if(req.url ==='/about'){
//         res.end("About")
//     }
//     else{
//         res.end("Error")
//     }
// });

const server = http.createServer(middleware);
server.listen(8080,(req,res)=>{
    console.log("Server is runnig");
});
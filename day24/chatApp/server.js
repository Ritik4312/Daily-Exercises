const express = require('express');
const http = require('http');  
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);
app.use(express.static('public'));
io.on('connection', (socket) => {
    console.log('A user connected',socket.id);
    socket.emit('message', 'Welcome to the chat!');
    socket.on("chat",(msg)=>{
    console.log("Message received:", msg);
    io.emit("message", msg);// message is broadcasted to all connected clients
    })
    socket.on('disconnect', () => {
        console.log('A user disconnected',socket.id);
    });
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
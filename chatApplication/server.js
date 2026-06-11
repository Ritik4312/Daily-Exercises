const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = new Server(server);

app.use(express.static("public"));

const users = {};

io.on("connection", (socket) => {

    console.log("Connected:", socket.id);

    socket.on("join", (username) => {

        users[socket.id] = username;

        io.emit("users", users);

        io.emit("message", {
            sender: "System",
            text: `${username} joined chat`
        });
    });

    socket.on("broadcast", (data) => {

        io.emit("message", {
            sender: data.sender,
            text: data.message
        });
    });

    socket.on("privateMessage", (data) => {

        io.to(data.receiverSocketId).emit("message", {
            sender: `${data.sender} (Private)`,
            text: data.message
        });

        socket.emit("message", {
            sender: `You -> ${users[data.receiverSocketId]}`,
            text: data.message
        });
    });

    socket.on("disconnect", () => {

        const username = users[socket.id];

        delete users[socket.id];

        io.emit("users", users);

        io.emit("message", {
            sender: "System",
            text: `${username} left chat`
        });

        console.log("Disconnected");
    });

});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
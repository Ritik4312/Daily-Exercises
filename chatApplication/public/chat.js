const socket = io();

const username =
    localStorage.getItem("username");

socket.emit("join", username);

const messages =
    document.getElementById("messages");

socket.on("message", (data) => {

    const div = document.createElement("div");

    div.innerHTML =
        `<b>${data.sender}</b>: ${data.text}`;

    messages.appendChild(div);
});

socket.on("users", (users) => {

    const dropdown =
        document.getElementById("userList");

    dropdown.innerHTML =
        `<option value="">Broadcast</option>`;

    for (let socketId in users) {

        if (users[socketId] !== username) {

            const option =
                document.createElement("option");

            option.value = socketId;

            option.textContent = users[socketId];

            dropdown.appendChild(option);
        }
    }
});

function sendMessage() {

    const message =
        document.getElementById("msg").value;

    const selectedUser =
        document.getElementById("userList").value;

    if (!message) return;

    if (selectedUser) {

        socket.emit("privateMessage", {
            sender: username,
            receiverSocketId: selectedUser,
            message
        });

    } else {

        socket.emit("broadcast", {
            sender: username,
            message
        });
    }

    document.getElementById("msg").value = "";
}
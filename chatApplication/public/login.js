function login() {

    const username =
        document.getElementById("username").value;

    localStorage.setItem("username", username);

    window.location.href = "chat.html";
}
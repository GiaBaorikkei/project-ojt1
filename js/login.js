// login.js
function login() {
    let userEmail = document.getElementById("userNameInput").value;
    let userPassword = document.getElementById("passInput").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    
    let foundUser = users.find(user => user.email === userEmail);

    if (foundUser) {
        if (foundUser.password === userPassword) {
            console.log(foundUser.action)
            if (foundUser.action === 0) {
                alert("Tài khoản đang bị chặn");
            } else {
                localStorage.setItem("nameUser", JSON.stringify(foundUser.name));
                window.location.href = "../index.html";
            }
        } else {
            alert("Mật khẩu không đúng"); 
        }
    } else {
        alert("Email không đúng");
    }
}
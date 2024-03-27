function login() {
    let userEmail = document.getElementById("userNameInput").value; // Thay đổi tên biến
    let userPassword = document.getElementById("passInput").value; // Thay đổi tên biến

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let foundUser = users.find(user => user.email === userEmail); // Tìm người dùng với email nhập vào

    if (foundUser) { // Nếu tìm thấy người dùng có email tương ứng
        if (foundUser.password === userPassword) { // Kiểm tra mật khẩu của người dùng
            localStorage.setItem("nameUser", JSON.stringify(foundUser.name));
            
            // Đăng nhập thành công, chuyển hướng đến trang chính hoặc trang khác
            window.location.href = "../index.html";
        } else {
            // Hiển thị thông báo lỗi nếu mật khẩu không đúng
            document.getElementById("messPass").textContent = "Mật khẩu không đúng"; 
        }
    } else {
        // Hiển thị thông báo lỗi nếu không tìm thấy người dùng với email nhập vào
        document.getElementById("messUser").textContent = "Email không đúng";
    }
}

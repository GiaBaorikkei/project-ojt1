let users = JSON.parse(localStorage.getItem("users")) || [];
function register() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let passWork = document.getElementById("passWork").value;
    let rePassWork = document.getElementById("rePassWork").value;

    for (let user of users) {
        if (user.phone === phone) {
            document.getElementById("messPhone").textContent = "Số điện thoại đã tồn tại";
            return;
        } else if(user.email === email) {
            document.getElementById("messEmail").textContent = "Email đã tồn tại"
            return;
        } else if (passWork !== rePassWork) {
            document.getElementById("message").textContent = "Mật khẩu không trùng"; 
            return;
        }
    }

    let newUser = {
        idUser: Math.ceil(Math.random()*1000000000 ),
        name: name,
        email: email,
        phone: phone,
        password: passWork,
        status: "Không hoạt động",
        action:"1",
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

     // Xóa giá trị của các trường input sau khi đã đăng ký thành công
     document.getElementById("name").value = "";
     document.getElementById("email").value = "";
     document.getElementById("phone").value = "";
     document.getElementById("passWork").value = "";
     document.getElementById("rePassWork").value = "";
 
     // Xóa nội dung của các thông báo
     document.getElementById("messPhone").textContent = "";
     document.getElementById("messEmail").textContent = "";
     document.getElementById("message").textContent = "";

     window.location.href = "login.html";
}
let users = JSON.parse(localStorage.getItem("users")) || [];
let nameUser = JSON.parse(localStorage.getItem('nameUser')) || "";
function render() {
    const usersLocal = JSON.parse(localStorage.getItem('users')) || [];
    let text = "";
    for (let i = 0; i < usersLocal.length; i++) {
        if (usersLocal[i].name === nameUser) {
            usersLocal[i].status = "Đang hoạt động";
        } else {
            usersLocal[i].status = "Không hoạt động";
        }
        text +=
        `
            <tr>
            <td>${i+1}</td>
            <td>${usersLocal[i].idUser}</td>
            <td>${usersLocal[i].name}</td>
            <td>${usersLocal[i].email}</td>
            <td>${usersLocal[i].phone}</td>
            <td>${usersLocal[i].status}</td>
            <td>
                <div class="fction">                    
                    <button onclick="deleteUser(${i})" class="btFc">Xoá</button>
                    <button onclick="${usersLocal[i].action === 0 ? "unblockUser" : "blockUser"}(${i})" class="btFc">${usersLocal[i].action === 0 ? "Bỏ chặn" : "Chặn"}</button>
                </div>
            </td>

                </div>
            </td>         
        </tr>
        `;
    }
    document.getElementById("tbody").innerHTML = text;
}

render();

function deleteUser(index) {
    const usersLocal = JSON.parse(localStorage.getItem('users')) || [];
    // Xóa thông tin người dùng khỏi mảng
    usersLocal.splice(index, 1);
    // Cập nhật dữ liệu trong local storage
    localStorage.setItem('users', JSON.stringify(usersLocal));
    // Render lại danh sách người dùng
    render();
}

function blockUser(index) {
    const usersLocal = JSON.parse(localStorage.getItem('users')) || [];
    // Chuyển trạng thái action của người dùng về 0 (chặn)
    usersLocal[index].action = 0;
    // Cập nhật dữ liệu trong local storage
    localStorage.setItem('users', JSON.stringify(usersLocal));
    // Render lại danh sách người dùng
    render();
}
//Bo chan
function unblockUser(index) {
    const usersLocal = JSON.parse(localStorage.getItem('users')) || [];
    // Chuyển trạng thái action của người dùng về 1 (không bị chặn)
    usersLocal[index].action = 1;
    // Cập nhật dữ liệu trong local storage
    localStorage.setItem('users', JSON.stringify(usersLocal));
    // Render lại danh sách người dùng
    render();
}

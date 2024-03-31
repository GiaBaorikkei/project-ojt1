let product = JSON.parse(localStorage.getItem("products"));
let xeGa = product.filter(function(e) {
    return e.type === 1;
});
let typeList = JSON.parse(localStorage.getItem("typeList"));
let xeGaTitle = document.getElementById("xeGaTitle");
xeGaTitle.innerHTML = typeList[0].name;
let xeGaContainer = document.getElementById("xeGaContainer");
xeGaContainer.innerHTML = ""; // Xóa bỏ nội dung cũ trước khi thêm nội dung mới
for (let i = 0; i < xeGa.length; i++) {
    xeGaContainer.innerHTML += `
    <div  class="card" style="width: 18rem;">
        <img src="${xeGa[i].images[0]}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${xeGa[i].name}</h5>
            <p class="card-text">${xeGa[i].price}</p>
            <a href="../utils/product.html?id=${xeGa[i].id}" class="btn btn-primary">Xem chi tiết</a>
        </div>
    </div>
    `;
}
function nameLogin() {
    let namUserCurrent = JSON.parse(localStorage.getItem("nameUser"));
    if (namUserCurrent == null) {
        console.log("Bạn chưa đăng nhập");
    } else {
        document.getElementById("nameLogin").innerText = namUserCurrent;
        document.getElementById("logOut").innerText = "Đăng xuất";
    }
}

nameLogin();
 //So luong san pham trong gio hang
 let nameUser = JSON.parse(localStorage.getItem("nameUser"))
let cart = JSON.parse(localStorage.getItem("cart_"+nameUser))
if (cart && cart.length > 0) {
    // Lấy số lượng sản phẩm trong giỏ hàng
    let itemCount = cart.length;
    // Đặt số lượng vào phần tử div
    document.getElementById("itemInCart").textContent = itemCount;
} else {
    // Nếu giỏ hàng không tồn tại hoặc rỗng, hiển thị số lượng là 0
    document.getElementById("itemInCart").textContent = "0";
}
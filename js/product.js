let productList = JSON.parse(localStorage.getItem("products"));
let id = window.location.href.split("?")[1].split("=")[1];
let product = productList.find(function(e) {
    return e.id == id;
});

let nameContainer = document.getElementById("card-title");
let priceContainer = document.getElementById("card-text");
let imgContainer = document.getElementById("card-img");
let desContainer = document.getElementById("card-des");
nameContainer.innerHTML = product.name;
priceContainer.innerHTML = product.price;
imgContainer.innerHTML = `<img src="${product.images}" class="card-img-top" alt="Product Image">`;
desContainer.innerHTML = product.description;


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


//Thêm vao gio hang
document.addEventListener('DOMContentLoaded',function(){
        let addToCartButtons = document.getElementById('addToCart');
        addToCartButtons.addEventListener('click',function(){
            let nameUser = JSON.parse(localStorage.getItem('nameUser'));
            if (!nameUser) {
                // Nếu chưa đăng nhập, không thực hiện thêm sản phẩm vào giỏ hàng
                alert("Vui lòng đăng nhập trước khi thêm sản phẩm vào giỏ hàng!");
                return;
            }
            let cart = JSON.parse(localStorage.getItem('cart_'+ nameUser)) || [];
            cart.push(product)
            // Lưu danh sách giỏ hàng mới vào localStorage
            localStorage.setItem("cart_"+ nameUser, JSON.stringify(cart));
            // let nameUser = JSON.parse(localStorage.getItem("nameUser"))
            // let cart = JSON.parse(localStorage.getItem("cart_"+nameUser))
            if (cart && cart.length > 0) {
                // Lấy số lượng sản phẩm trong giỏ hàng
                let itemCount = cart.length;
                // Đặt số lượng vào phần tử div
                document.getElementById("itemInCart").textContent = itemCount;
            } else {
                // Nếu giỏ hàng không tồn tại hoặc rỗng, hiển thị số lượng là 0
                document.getElementById("itemInCart").textContent = "0";
            }
            // Thông báo cho người dùng đã thêm sản phẩm vào giỏ hàng thành công
            alert("Sản phẩm đã được thêm vào giỏ hàng!");
        })
}) 
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
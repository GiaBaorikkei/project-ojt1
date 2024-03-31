// Lấy dữ liệu từ local storage
let nameUser = JSON.parse(localStorage.getItem('nameUser'));
let cart = JSON.parse(localStorage.getItem('cart_' + nameUser));

// Hàm render giỏ hàng
function render() {
    // Lấy thẻ tbody để chèn các hàng sản phẩm vào
    var cartTableBody = document.getElementById('cart');

    // Xóa hết các hàng sản phẩm hiện có trong bảng
    cartTableBody.innerHTML = '';

    // Kiểm tra xem giỏ hàng có sản phẩm không
    if (cart && cart.length > 0) {
        let count = 1;
        let element = "";
        // Duyệt qua mỗi sản phẩm trong giỏ hàng và tạo chuỗi HTML cho từng sản phẩm
        cart.forEach(function(product, index) {
            element += `
                <tr>
                    <td>${count}</td>
                    <td>${product.name}</td>
                    <td><img class="imgCart" src="${product.images[0]}" class="card-img-top" alt="..."></td>
                    <td>${product.price}</td>
                    <td><button class="delete" data-index="${index}">Xóa</button></td>
                </tr>
            `;
            count++;
        });
        // Chèn chuỗi HTML vào thẻ tbody của bảng
        cartTableBody.innerHTML = element;

        // Lắng nghe sự kiện click cho nút "Xóa"
        let deleteButtons = document.querySelectorAll('.delete');
        deleteButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                // Lấy index của sản phẩm cần xóa
                let index = parseInt(button.getAttribute('data-index'));
                // Xóa sản phẩm ra khỏi mảng cart
                cart.splice(index, 1);
                // Cập nhật lại local storage
                localStorage.setItem('cart_' + nameUser, JSON.stringify(cart));
                // Render lại danh sách sản phẩm
                render();
            });
        });
    } else {
        // Nếu giỏ hàng trống, hiển thị thông báo
        cartTableBody.innerHTML = '<tr><td colspan="5">Giỏ hàng trống.</td></tr>';
    }
}

// Gọi hàm render() để hiển thị sản phẩm trong giỏ hàng khi trang được tải
render();
//So luong san pham 
if (cart && cart.length > 0) {
    // Lấy số lượng sản phẩm trong giỏ hàng
    let itemCount = cart.length;
    // Đặt số lượng vào phần tử div
    document.getElementById("itemInCart").textContent = itemCount;
} else {
    // Nếu giỏ hàng không tồn tại hoặc rỗng, hiển thị số lượng là 0
    document.getElementById("itemInCart").textContent = "0";
}
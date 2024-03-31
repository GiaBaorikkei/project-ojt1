// Lấy dữ liệu từ local storage
let nameUser = JSON.parse(localStorage.getItem('nameUser'));
let cart = JSON.parse(localStorage.getItem('cart_' + nameUser));

// Hàm để lấy giá tiền từ chuỗi sản phẩm
function extractPriceFromString(priceString) {
    // Tìm chuỗi số trong chuỗi sản phẩm
    let priceMatch = priceString.match(/\d+(?:\.\d+)?/);
    // Nếu tìm thấy chuỗi số, trả về giá tiền dưới dạng số
    if (priceMatch) {
        return parseFloat(priceMatch[0]); // Chuyển chuỗi số thành số thực
    }
    return 0; // Nếu không tìm thấy, trả về giá trị mặc định là 0
}

// Hàm render giỏ hàng
function render() {
    // Lấy thẻ tbody để chèn các hàng sản phẩm vào
    var cartTableBody = document.getElementById('cart');

    // Xóa hết các hàng sản phẩm hiện có trong bảng
    cartTableBody.innerHTML = '';

    // Kiểm tra xem giỏ hàng có sản phẩm không
    if (cart && cart.length > 0) {
        let totalPrice = 0; // Tổng giá tiền của giỏ hàng
        let count = 1;
        let element = "";
        // Duyệt qua mỗi sản phẩm trong giỏ hàng và tạo chuỗi HTML cho từng sản phẩm
        cart.forEach(function(product, index) {
            totalPrice += extractPriceFromString(product.price) * product.quantity; // Cập nhật tổng giá tiền
            element += `
                <tr>
                    <td>${count}</td>
                    <td>${product.name}</td>
                    <td><img class="imgCart" src="${product.images[0]}" class="card-img-top" alt="..."></td>
                    <td><input type="number" min="1" value="${product.quantity}" onchange="updateQuantity(${index}, this.value)"></td>
                    <td>${product.price}</td>
                    <td>${extractPriceFromString(product.price) * product.quantity}.000.000 VNĐ</td>
                    <td><button class="delete" data-index="${index}">Xóa</button></td>
                </tr>
            `;
            count++;
        });
        // Chèn chuỗi HTML vào thẻ tbody của bảng
        cartTableBody.innerHTML = element;

        // Hiển thị tổng giá tiền
        document.getElementById("totalPrice").innerText = totalPrice.toLocaleString('vi-VN') + ' VNĐ';

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

// Cập nhật số lượng sản phẩm và tính tổng giá tiền khi số lượng thay đổi
function updateQuantity(index, quantity) {
    cart[index].quantity = parseInt(quantity);
    localStorage.setItem('cart_' + nameUser, JSON.stringify(cart));
    render();
}

// Hiển thị số lượng sản phẩm trong giỏ hàng
if (cart && cart.length > 0) {
    let itemCount = cart.reduce((total, product) => total + product.quantity, 0);
    document.getElementById("itemInCart").textContent = itemCount;
} else {
    document.getElementById("itemInCart").textContent = "0";
}
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

let product = JSON.parse(localStorage.getItem("products"));
let xeSo = product.filter(function(e) {
    return e.type === 2;
});
let typeList = JSON.parse(localStorage.getItem("typeList"));
let xeSoTitle = document.getElementById("xeSoTitle");
xeSoTitle.innerHTML = typeList[1].name;
let xeSoContainer = document.getElementById("xeSoContainer");
xeSoContainer.innerHTML = ""; 
for (let i = 0; i < xeSo.length; i++) {
    xeSoContainer.innerHTML += `
    <div  class="card" style="width: 18rem;">
        <img src="${xeSo[i].images[0]}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${xeSo[i].name}</h5>
            <p class="card-text">${xeSo[i].price}</p>
            <a href="../utils/product.html?id=${xeSo[i].id}" class="btn btn-primary">Xem chi tiết</a>
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
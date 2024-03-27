let product = JSON.parse(localStorage.getItem("products"));
let xeCon = product.filter(function(e) {
    return e.type === 3;
});
let typeList = JSON.parse(localStorage.getItem("typeList"));
let xeConTitle = document.getElementById("xeConTitle");
xeConTitle.innerHTML = typeList[2].name;
let xeConContainer = document.getElementById("xeConContainer");
xeConContainer.innerHTML = ""; 
for (let i = 0; i < xeCon.length; i++) {
    xeConContainer.innerHTML += `
    <div  class="card" style="width: 18rem;">
        <img src="${xeCon[i].images[0]}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${xeCon[i].name}</h5>
            <p class="card-text">${xeCon[i].price}</p>
            <a href="../utils/product.html?id=${xeCon[i].id}" class="btn btn-primary">Xem chi tiết</a>
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

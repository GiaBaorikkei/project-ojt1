let users = JSON.parse(localStorage.getItem("users")) || [];
function render() {
    const usersLocal = JSON.parse(localStorage.getItem('users'));
    let text ="";
    for (let i = 0; i < usersLocal.length; i++) {
        text +=
        `
            <tr>
            <td>${i+1}</td>
            <td>${usersLocal[i].idUser}</td>
            <td>${usersLocal[i].name}</td>
            <td>${usersLocal[i].email}</td>
            <td>${usersLocal[i].phone}</td>
            <td>${usersLocal[i].phone}</td>
            <td>
                <div class="fction">                    
                    <button onclick="editProduct(${usersLocal[i].id})" class="btFc">Mở</button>
                    <button onclick = "deleteProduct(${usersLocal[i].id})" class="btFc">Chặn</button>
                </div>
            </td>         
        </tr>
        `
    }
    document.getElementById("tbody").innerHTML = text;
}
render();

function searchProduct(){
    let searchName = document.getElementById("search").value;
    let elementSearch=[];
    for (let i = 0; i < users.length; i++) {
        if (users[i].name.toUpperCase().includes(searchName.toUpperCase()) == true){
            elementSearch.push(users[i]);
        }

    }
    let element="";
    for (let i = 0; i < elementSearch.length; i++) {
        element +=
        `
        <tr>
        <td>${i+1}</td>
        <td>${elementSearch[i].idUser}</td>
        <td>${elementSearch[i].name}</td>
        <td>${elementSearch[i].email}</td>
        <td>${elementSearch[i].phone}</td>
        <td>${elementSearch[i].phone}</td>
        <td>
            <div class="fction">                    
                <button onclick="editProduct(${elementSearch[i].id})" class="btFc">Mở</button>
                <button onclick = "deleteProduct(${elementSearch[i].id})" class="btFc">Chặn</button>
            </div>
        </td>         
    </tr>
    `
    }
    document.getElementById("tbody").innerHTML = element;
}



let products = JSON.parse(localStorage.getItem("products")) || [];
function saveProduct(){
    let type = document.getElementById("type").value;
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let image = document.getElementById("img").value;
    let description = document.getElementById("description").value;  
    type = parseInt(type);
    let obj = {
        id: products.length+1,
        type: type,
        name: name,
        price:price,
        images: [image],
        description:description
    }

    if (flag!=-1) {
        // tức là muốn sửa
        // có id rồi tìm vị trí của user
         for (let i = 0; i < products.length; i++) {
            if (products[i].id == flag) {
                products.splice(i, 1, {...obj, id: flag});
                localStorage.setItem("products", JSON.stringify(products));
                flag = -1;
                render();
                document.getElementById("btn").innerText = "Lưu lại"
                return;
            }
         }
       }
    products.push(obj);
    localStorage.setItem("products",JSON.stringify(products));
    render();

    document.getElementById("type").value = "";
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("img").value = "";
    document.getElementById("description").value = "";
}
function render() {
    const productsLocal = JSON.parse(localStorage.getItem('products'));
    // console.log(productsLocal);
    let text ="";
    for (let i = 0; i < productsLocal.length; i++) {
        text +=
        `
            <tr>
            <td>${i+1}</td>
            <td>${productsLocal[i].type}</td>
            <td>${productsLocal[i].name}</td>
            <td><img class = "imgAdmin" src="${productsLocal[i].images}" alt=""></td>
            <td>${productsLocal[i].price}</td>
            <td>
                <div class="fction">                    
                    <button onclick="editProduct(${productsLocal[i].id})" class="btFc">Sửa</button>
                    <button onclick = "deleteProduct(${productsLocal[i].id})" class="btFc">Xóa</button>
                </div>
            </td>         
        </tr>
        `
    }
    document.getElementById("tbody").innerHTML = text;
    clear();
}
render();

function deleteProduct(idProduct){
    let confirmDelete = confirm("Bạn có chắc muốn xóa không??")
    if(!confirmDelete){
        return;
    }
    for (let i = 0; i < products.length; i++) {
        if (idProduct == products[i].id) {
            products.splice(i,1);
            localStorage.setItem("products", JSON.stringify(products));
            render();
        }
    }
}
let flag = -1; 
function editProduct(idProduct){
    for (let i = 0; i < products.length; i++) {
        if(idProduct == products[i].id) {
            document.getElementById("type").value = products[i].type;
            document.getElementById("name").value = products[i].name;
            document.getElementById("price").value = products[i].price;
            document.getElementById("img").value = products[i].images;
            document.getElementById("description").value = products[i].description;
            flag = idProduct;
            document.getElementById("btn").innerText = "Chỉnh sửa";
            return;
        }
    }
    render();
}

function clear(){
    document.getElementById("type").value = "";
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("img").value = "";
    document.getElementById("description").value = "";
}


function searchProduct(){
    let searchName = document.getElementById("search").value;
    let elementSearch=[];
    for (let i = 0; i < products.length; i++) {
        if (products[i].name.toUpperCase().includes(searchName.toUpperCase()) == true){
            elementSearch.push(products[i]);
        }

    }
    let element="";
    for (let i = 0; i < elementSearch.length; i++) {
        element +=
        `
            <tr>
            <td>${i+1}</td>
            <td>${elementSearch[i].type}</td>
            <td>${elementSearch[i].name}</td>
            <td><img class = "imgAdmin" src="${elementSearch[i].images}" alt=""></td>
            <td>${elementSearch[i].price}</td>
            <td>
                <div class="fction">                    
                    <button onclick="editProduct(${elementSearch[i].id})" class="btFc">Sửa</button>
                    <button onclick = "deleteProduct(${elementSearch[i].id})" class="btFc">Xóa</button>
                </div>
            </td>         
        </tr>
        `
    }
    document.getElementById("tbody").innerHTML = element;
}


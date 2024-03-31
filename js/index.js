function nameLogin() {
    let namUserCurrent = JSON.parse(localStorage.getItem("nameUser"));
    if (namUserCurrent == null) {
        console.log("Bạn chưa đăng nhập");
    } else {
        document.getElementById("nameLogin").innerText = namUserCurrent;
        document.getElementById("logOut").innerText = "Đăng xuất";
        document.getElementById("logOut").addEventListener("click", function() {
            localStorage.removeItem("nameUser");
            // Để chắc chắn rằng sau khi đăng xuất, cập nhật lại giao diện
            document.getElementById("nameLogin").innerText = ""; // Xóa tên đăng nhập
            document.getElementById("logOut").innerText = ""; // Xóa nút "Đăng xuất"
        });
    }
}


nameLogin();

function addToCart(){
    let users = JSON.parse(localStorage.getItem("users"));
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == checkLogin) {
            //lấy thông tin sản phẩm để đưa vào giỏ hàng
            // làm sao để lấy thông tin sản phẩm
            // console.log("11111", productId);
            // có id sản phẩm rồi phải làm sao để lấy thồn tin sản phẩm
    let product = JSON.parse(localStorage.getItem("products"));
    for (let j = 0; j  < product.length; j++){
        if(productId == product[j].id) {
            // lấy thông tin sản phẩm
            console.log("111", product[j]);
            console.log("giỏ hàng của user sẽ là", users[i].cart);
            
            /*
                trước khi thêm vào phải xem trong giỏ hàng có sản phẩm đó chưa
                có rồi thì tăng số lượng, chưa có thì thêm như bth
            */
           // Kiểm tra xem trong giỏ hàng có tồn tại sản phẩm đó chưa
           //duyệt giỏ hàng
           let index = users[i].cart.findIndex((item, index) =>{
                return item.id == productId;
           })
           if(index == -1) {
            // Tức là không có thêm bình thường
            console.log("chưa có");
            users[i].cart.push({...product[i]})
           }else {
            // có rồi tăng số lượng
            console.log("có rồi");
           }
        }
    }
        }
    }
   
}
// Function hiển thị số lượng sản phẩm
// function showQuantityCart(){
//     // lấy giỏ hàng ra.length là được
//     let checkLogin = JSON.parse(localStorage.getItem("check-login"));
//     let users = JSON.parse(localStorage.getItem("users"));
//     for(let i = 0 ; i < users.length ; i++){
//       if(users[i].userId == checkLogin){
//         document.getElementsByClassName("itemInCart")[0].innerText = users[i].cart.length;
//       }
      
//     }
//   }
  
//   showQuantityCart();
    
//   let productList = [
//     {
//         name:"Sh mode 125",
//         category: "Xe tay ga",
//         images: ["https://cdn.honda.com.vn/motorbike-strong-points/November2023/3se57aukvnCXrxyT9dFp.png"],
//         id:1,
//         color: "white",
//         status: true,
//         brand:"Honda",
//         price: "Giá từ: 50.000.000 VNĐ",
//         description: "Thuộc phân khúc xe ga cao cấp và thừa hưởng thiết kế sang trọng nổi tiếng của dòng xe SH, Sh mode luôn được đánh giá cao nhờ kiểu dáng sang trọng, tinh tế tới từng đường nét, động cơ tiên tiến và các tiện nghi cao cấp xứng tầm phong cách sống thời thượng, đẳng cấp.",
//         type: 1,  
//     },
//     {
//         name:"Vision",
//         category: "Xe tay ga",
//         images: ["https://cdn.honda.com.vn/motorbike-versions/November2022/PVv5bAR0a69T7Y2GTvQ9.jpg"],
//         id:2,
//         color: "white",
//         status: true,
//         brand:"Honda",
//         price: "Giá từ: 37.000.000 VNĐ",
//         description: "Thuộc phân khúc xe tay ga phổ thông, Vision luôn là mẫu xe quốc dân được yêu thích, đặc biệt trong giới trẻ nhờ kiểu dáng thời trang, trẻ trung và nhỏ gọn, khả năng tiết kiệm nhiên liệu vượt trội và vô cùng bền bỉ.",
//         type: 1,  
//        },
//        {
//             name:"Air Blade 160/125",
//             category: "Xe tay ga",
//             images: ["https://cdn.honda.com.vn/motorbike-versions/May2022/UDvt2b8oUaEjVwt3fY1q.png"],
//             id:3,
//             color: "black",
//             status: true,
//             brand:"Honda",
//             price: "Giá từ: 40.000.000 VNĐ",
//             description: "Xứng danh mẫu xe tay ga thể thao tầm trung hàng đầu trong suốt hơn một thập kỷ qua, AIR BLADE hoàn toàn mới nay được nâng cấp động cơ eSP+ 4 van độc quyền, tiên tiến nhất giúp mang trong mình mãnh lực tiên phong.",
//             type: 1,  
//        },
//        {
//             name:"LEAD",
//             category: "Xe tay ga",
//             images: ["https://cdn.honda.com.vn/motorbikes/December2021/PxbOtPG619Vte84CQHPg.png"],
//             id:4,
//             color: "Grey",
//             status: true,
//             brand:"Honda",
//             price: "Giá từ: 45.000.000 VNĐ",
//             description: "Kế thừa ngôn ngữ thiết kế hiện đại cùng nhiều tiện ích vượt trội vốn có, xe LEAD 125cc mới nay được nâng tầm với động cơ thế hệ mới nhất của Honda eSP+ như trên các mẫu xe ga cao cấp, màu sắc mới hợp xu hướng, cổng sạc tiện lợi, thiết kế phía trước tinh tế, tem xe nổi bật giúp nâng tầm phong cách và tối đa trải nghiệm lái xe cho người sở hữu.",
//             type: 1,  
//        },
//        {
//             name:"Vario 125",
//             category: "Xe tay ga",
//             images: ["https://cdn.honda.com.vn/motorbike-versions/November2023/OXbW3Fw1ZdwkbC3Avfzj.png"],
//             id:5,
//             color: "Blue",
//             status: true,
//             brand:"Honda",
//             price: "Giá từ: 37.000.000 VNĐ",
//             description: "Vario 125 sở hữu thiết kế thể thao vô cùng trẻ trung ấn tượng, khác biệt hẳn so với những mẫu xe tay ga phổ thông truyền thống, mang đậm dấu ấn cá nhân sành điệu, luôn khao khát thể hiện cái tôi & khẳng định một cách mạnh mẽ cá tính riêng biệt của chủ sở hữu.",
//             type: 1,  
//        },
//        {
//             name:"JANUS",
//             category: "Xe tay ga",
//             images: ["https://yamaha-motor.com.vn/wp/wp-content/uploads/2023/07/Janus-standard-Red-Metallic4-2.png"],
//             id:6,
//             color: "white",
//             status: true,
//             brand:"Yamaha",
//             price: "Giá từ: 32.000.000 VNĐ",
//             description: "Xe máy Janus Yamaha có thiết kế trẻ trung cùng khả năng vận hành mượt mà với mức giá rất phải chăng. Sở hữu động cơ Blue Core, hệ thống Stop & Start và chức năng One push start, xe Janus có khả năng tiết kiệm nhiên liệu",
//             type: 1,  
//        },
//        {
//             name:"Blade 2023",
//             category: "Xe số",
//             images:["https://cdn.honda.com.vn/motorbike-versions/March2023/j37sLOXkDQsdX7nnBTOj.png"],
//             id:7,
//             color: "Black",
//             status: true,
//             brand: "Honda",
//             price: "Giá từ: 27.000.000 VNĐ",
//             description: "Honda Blade 2023 là sự kết hợp hoàn hảo giữa phong cách thể thao khỏe khoắn cùng với thiết kế gọn gàng tiện lợi. Những đường nét vuốt nhọn đầy góc cạnh không chỉ tôn lên vẻ sắc sảo & thanh thoát mà còn tạo ra nét cá tính đầy riêng biệt của Honda Blade.",
//             type: 2,
//        },
//        {
//             name:"Future 125 FI",
//             category: "Xe số",
//             images:["https://cdn.honda.com.vn/motorbike-strong-points/January2024/NkQsGaNT0xrg3F02CIDJ.jpg"],
//             id:8,
//             color: "Blue",
//             status: true,
//             brand: "Honda",
//             price: "Giá từ: 23.000.00 VNĐ",
//             description: "Honda Future 125 FI có thiết kế sang trọng, trẻ trung, lịch lãm và hiện đại với phối màu mới tạo những điểm nhấn ấn tượng, thu hút mọi ánh nhìn. Cùng với vị thế là mẫu xe số cao cấp hàng đầu phân khúc tại Việt Nam, Future 125 FI cho bạn tự tin thể hiện phong cách, phẩm chất của mình trên mọi hành trình.",
//             type: 2,
//        },
//        {
//             name:"Wave RSX",
//             category: "Xe số",
//             images:["https://cdn.honda.com.vn/motorbike-versions/November2023/GZxuAoXd6O0zJQCqeGAy.png"],
//             id:9,
//             color: "Black",
//             status: true,
//             brand: "Honda",
//             price: "Giá từ: 17.000.000 VNĐ",
//             description: "Phong cách thiết kế của Wave RSX FI là sự kết hợp hoàn hảo giữa yếu tố thể thao, năng động và tiện lợi trong sử dụng. Những đường nét góc cạnh không chỉ tôn lên vẻ mạnh mẽ mà còn tạo ra nét cá tính riêng của xe.",
//             type: 2,
//        },
//        {
//             name:"Wave Alpa 110",
//             category: "Xe số",
//             images:["https://cdn.honda.com.vn/motorbike-versions/July2023/V1JxzlIUxWuk5RLW8fYF.jpg"],
//             id:10,
//             color: "Black",
//             status: true,
//             brand: "Honda",
//             price: "Giá từ: 18.000.000 VNĐ",
//             description: "Wave Alpha được trang bị động cơ 110cc với hiệu suất vượt trội nhưng vẫn đảm bảo tiết kiệm nhiên liệu tối ưu, cho bạn thêm tự tin và trải nghiệm tốt nhất trên mọi hành trình.",
//             type: 2,
//        },
//        {
//             name:"Sirius FI",
//             category: "Xe số",
//             images:["https://yamaha-motor.com.vn/wp/wp-content/uploads/2022/08/Sirius-Black-Disk-004.png"],
//             id:11,
//             color: "Black",
//             status: true,
//             brand: "Yamaha",
//             price: "Giá từ: 23.000.000 VNĐ",
//             description: "Xe Sirius FI thế hệ mới hoàn toàn với phanh điện tử và cốp chứa đồ rộng rãi, màn hình led hiển thị rõ ràng",
//             type: 2,
//        },
//        {
//             name:"Jupiter FI",
//             category: "Xe số",
//             images:["https://yamaha-motor.com.vn/wp/wp-content/uploads/2023/03/Jupiter-Mat-Black-004-1.png"],
//             id:12,
//             color: "Black",
//             status: true,
//             brand: "Yamaha",
//             price: "Giá từ: 25.000.000 VNĐ",
//             description: "Jupiter FI thế hệ mới phun xăng điện tử, đèn pha sáng rõ nét, vành đúc chắc chắn trẻ trung, động cơ khỏe và bền bỉ",
//             type: 2,
//        },
//        {
//             name:"Winner X 2024",
//             category: "Xe tay côn",
//             images:["https://cdn.honda.com.vn/motorbike-versions/December2023/6kdmcGZvwe1TyMeDSswx.jpg"],
//             id:13,
//             color: "Black",
//             status: true,
//             brand: "Yamaha",
//             price: "Giá từ: 46.160.000 VNĐ",
//             description: "WINNER X 2024 mới tiếp tục khẳng định chất riêng khác biệt hướng tới hình ảnh một mẫu siêu mô tô thể thao cỡ nhỏ hàng đầu tại Việt Nam. Thiết kế ngoại quan bắt mắt, kết hợp những trang bị hiện đại như trên các mẫu xe phân khối lớn, WINNER X 2024 sẵn sàng cùng các tay lái bứt tốc trên mọi hành trình khám phá.",
//             type: 3,
//        },
      
//        {
//                   name:"CBR150R",
//                   category: "Xe tay côn",
//                   images:["https://cdn.honda.com.vn/motorbike-versions/April2023/2pSqu65qdei9HLkHfOtJ.png"],
//                   id:14,
//                   color: "Black",
//                   status: true,
//                   brand: "Yamaha",
//                   price: "Giá từ: 72.290.000 VNĐ",
//                   description: "Tự hào mang trong mình tinh thần mô tô thể thao đặc trưng thương hiệu Honda, CBR150R là đáp án cho những ai đang tìm kiếm mảnh ghép trong cuộc sống năng động. Tính thể thao và linh hoạt của CBR150R xứng danh chiến hữu đích thực giúp bạn tự tin làm chủ mọi cung đường.",
//                   type: 3,
//              },
//              {
//                   name:"NINJA H2R",
//                   category: "Xe tay côn",
//                   images:["https://content2.kawasaki.com/ContentStorage/KMV/Products/4915/cc471aa1-aa2d-4126-92c8-9ca6b9c6c005.png?w=675"],
//                   id:15,
//                   color: "Black",
//                   status: true,
//                   brand: "KAWASAKI",
//                   price: "Giá từ: 2.000.000.000 VNĐ",
//                   description: "Thuộc loại xe phân khối lớn, phù hợp với nhưng người có sở thích tốc độ, động cơ mạnh mẽ, vẻ bề ngoài đa sắc màu",
//                   type: 3,
//              },
//              {
//                   name:"BMW Motorrad S 1000 RR",
//                   category: "Xe số",
//                   images:["https://i1-vnexpress.vnecdn.net/2023/04/13/BMW-S1000RR-VNE-2-1576900579-jpeg.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=1riR3ldSIPf_SEXx4UMv1Q"],
//                   id:16,
//                   color: "Black",
//                   status: true,
//                   brand: "BWM",
//                   price: "Giá từ: 700.000.000 VNĐ",
//                   description: "Loại xe phân khối lớn phù hợp với những người trẻ trung năng động, hoặc có thể dùng trong các trường đua, có khung gầm chắc chắc, thiết kế trẻ trung, trang bị đèn led, động cơ có sức kéo lớn",
//                   type: 3,
//              },
// ]
// let typeList = [
//     {
//         id: 1,
//         name: "Xe tay ga"
//     },
//     {
//         id:2,
//         name: "Xe số",
//     },
//     {
//         id:3,
//         name: "Xe tay côn",
//     }
// ]
// localStorage.setItem("typeList",JSON.stringify(typeList));
// localStorage.setItem("products", JSON.stringify(productList));

function renderProduct(){
     let products = JSON.parse(localStorage.getItem("products"));
     let element = "";
     for(let i =0; i< products.length; i++){
          element += ` 
          <div  class="card" style="width: 18rem;">
          <img src="${products[i].images[0]}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${products[i].name}</h5>
            <p class="card-text">${products[i].price}</p>
            <a href="../utils/product.html?id=${[products[i].id]}" class="btn btn-primary">Xem chi tiết</a>
          </div>
        </div>`
          
     }
     document.getElementById("renderList").innerHTML = element;
}
renderProduct();

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
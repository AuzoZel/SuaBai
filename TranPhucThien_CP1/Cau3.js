var Uname = document.getElementById("name")
var pw = document.getElementById("password")
var email = document.getElementById("email")

function getInfo() {
localStorage.setItem("Tên Đăng Nhập", Uname.value)
localStorage.setItem("Mật Khẩu", pw.value);
localStorage.setItem("Email", email.value);
window.location.href="./cau3show.html"
}



//note: Lay thong tin tu 3 o, luu, lay ra lai tu local storage
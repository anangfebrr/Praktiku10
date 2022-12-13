function ceklogin() {
    let mail = document.getElementById("email").value;
    let pw = document.getElementById("password").value;
    let form = document.getElementById("form");

    if(mail == "anangfebrr" && pw == "anang123") {
        form.setAttribute("action", "berhasil_login.html");
        window.alert("LOGIN BERHASIL!");
    }
    else{
        window.alert("username atau password yang anda masukan salah! silahkan periksa kembali!")
    }
}
let usuarios = localStorage.getItem("baseUsuario");
let contrasenas = localStorage.getItem("baseContra");
let nameUsu;


function registrosesion(){
    let regusuario = document.getElementById("regusu").value;
    let regcontra = document.getElementById("regcontra").value;

    if (usuarios != regusuario){
        localStorage.setItem("baseUsuario", regusuario);
        localStorage.setItem("baseContra", regcontra);
        location.href = "./login.html";

    }else{
        document.getElementById("error").innerHTML = "Usuario no disponible"
    }

}

function iniciarSecion() {
    let usuario = document.getElementById("usu").value;
    let contrasena = document.getElementById("contra").value;

    if (usuarios == usuario && contrasenas === contrasena) {
        nameUsu = usuario;
        localStorage.setItem("nameUsuario", nameUsu);
        location.href = "../index.html";
    } else {
        document.getElementById("error").innerHTML = "Usuario o Contraseña incorrectos";
    }
    
}

document.getElementById("usu").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        iniciarSecion();
    }
});
document.getElementById("contra").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        iniciarSecion();
    }
});


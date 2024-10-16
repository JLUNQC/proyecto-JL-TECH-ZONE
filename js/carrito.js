let acomulador = 0;
let totalValor = 0;
let nameUsu = localStorage.getItem("nameUsuario");


document.getElementById("nombreUsuario").innerHTML = nameUsu;
if (localStorage.getItem("nameUsuario")){
    document.getElementById("salirUsu").style.display = "block";
}

function salir(){
    localStorage.removeItem("nameUsuario");
    location.href = "../index.html";
}


function agregarCompra(){
    acomulador = acomulador + 1;
    document.getElementById("addCompra").innerHTML = acomulador;

    let valorUnita = parseInt(document.getElementById("valorProducto").textContent);
    totalValor = totalValor + valorUnita ;
    localStorage.setItem("total", totalValor);
    document.getElementById("TotalCompra").innerHTML = localStorage.getItem("total");
}

function agregarCompra1(){
    acomulador = acomulador + 1;
    document.getElementById("addCompra").innerHTML = acomulador;

    let valorUnita1 = parseInt(document.getElementById("valorProducto1").textContent);
    totalValor = totalValor + valorUnita1 ;
    localStorage.setItem("total", totalValor);
    document.getElementById("TotalCompra").innerHTML = localStorage.getItem("total");
}

function agregarCompra2(){
    acomulador = acomulador + 1;
    document.getElementById("addCompra").innerHTML = acomulador;

    let valorUnita2 = parseInt(document.getElementById("valorProducto2").textContent);
    totalValor = totalValor + valorUnita2 ;
    localStorage.setItem("total", totalValor);
    document.getElementById("TotalCompra").innerHTML = localStorage.getItem("total");
}

function agregarCompra3(){
    acomulador = acomulador + 1;
    document.getElementById("addCompra").innerHTML = acomulador;

    let valorUnita3 = parseInt(document.getElementById("valorProducto3").textContent);
    totalValor = totalValor + valorUnita3 ;
    localStorage.setItem("total", totalValor);
    document.getElementById("TotalCompra").innerHTML = localStorage.getItem("total");
}

function agregarCompra4(){
    acomulador = acomulador + 1;
    document.getElementById("addCompra").innerHTML = acomulador;

    let valorUnita4 = parseInt(document.getElementById("valorProducto4").textContent);
    totalValor = totalValor + valorUnita4 ;
    localStorage.setItem("total", totalValor);
    document.getElementById("TotalCompra").innerHTML = localStorage.getItem("total");
}

function agregarCompra5(){
    acomulador = acomulador + 1;
    document.getElementById("addCompra").innerHTML = acomulador;

    let valorUnita5 = parseInt(document.getElementById("valorProducto5").textContent);
    totalValor = totalValor + valorUnita5 ;
    localStorage.setItem("total", totalValor);
    document.getElementById("TotalCompra").innerHTML = localStorage.getItem("total");
}

function agregarCompra6(){
    acomulador = acomulador + 1;
    document.getElementById("addCompra").innerHTML = acomulador;

    let valorUnita6 = parseInt(document.getElementById("valorProducto6").textContent);
    totalValor = totalValor + valorUnita6 ;
    localStorage.setItem("total", totalValor);
    document.getElementById("TotalCompra").innerHTML = localStorage.getItem("total");
}

function agregarCompra7(){
    acomulador = acomulador + 1;
    document.getElementById("addCompra").innerHTML = acomulador;

    let valorUnita7 = parseInt(document.getElementById("valorProducto7").textContent);
    totalValor = totalValor + valorUnita7 ;
    localStorage.setItem("total", totalValor);
    document.getElementById("TotalCompra").innerHTML = localStorage.getItem("total");
}

function agregarCompra8(){
    acomulador = acomulador + 1;
    document.getElementById("addCompra").innerHTML = acomulador;

    let valorUnita8 = parseInt(document.getElementById("valorProducto8").textContent);
    totalValor = totalValor + valorUnita8 ;
    localStorage.setItem("total", totalValor);
    document.getElementById("TotalCompra").innerHTML = localStorage.getItem("total");
}

function agregarCompra9(){
    acomulador = acomulador + 1;
    document.getElementById("addCompra").innerHTML = acomulador;

    let valorUnita9 = parseInt(document.getElementById("valorProducto9").textContent);
    totalValor = totalValor + valorUnita9 ;
    localStorage.setItem("total", totalValor);
    document.getElementById("TotalCompra").innerHTML = localStorage.getItem("total");
}

function quitarCompra(){
    if(acomulador > 0){
        acomulador = acomulador - 1;
        document.getElementById("addCompra").innerHTML = acomulador;
    }
    if (totalValor > 0){
        let valorUnita = parseInt(document.getElementById("valorProducto").textContent);
        totalValor = totalValor - valorUnita;
        localStorage.setItem("total", totalValor);
        document.getElementById("TotalCompra").innerHTML = localStorage.getItem("total");
    }

}

function quitarCompra1(){
    if(acomulador > 0){
        acomulador = acomulador - 1;
        document.getElementById("addCompra").innerHTML = acomulador;
    }
    if (totalValor > 0){
        let valorUnita1 = parseInt(document.getElementById("valorProducto1").textContent);
        totalValor = totalValor - valorUnita1;
        localStorage.setItem("total", totalValor);
        document.getElementById("TotalCompra").innerHTML = localStorage.getItem("total");
    }

}

function quitarCompra2(){
    if(acomulador > 0){
        acomulador = acomulador - 1;
        document.getElementById("addCompra").innerHTML = acomulador;
    }
    if (totalValor > 0){
        let valorUnita2 = parseInt(document.getElementById("valorProducto2").textContent);
        totalValor = totalValor - valorUnita2;
        localStorage.setItem("total", totalValor);
        document.getElementById("TotalCompra").innerHTML = localStorage.getItem("total");
    }

}

function quitarCompra3(){
    if(acomulador > 0){
        acomulador = acomulador - 1;
        document.getElementById("addCompra").innerHTML = acomulador;
    }
    if (totalValor > 0){
        let valorUnita3 = parseInt(document.getElementById("valorProducto3").textContent);
        totalValor = totalValor - valorUnita3;
        localStorage.setItem("total", totalValor);
        document.getElementById("TotalCompra").innerHTML = localStorage.getItem("total");
    }

}

function quitarCompra4(){
    if(acomulador > 0){
        acomulador = acomulador - 1;
        document.getElementById("addCompra").innerHTML = acomulador;
    }
    if (totalValor > 0){
        let valorUnita4 = parseInt(document.getElementById("valorProducto4").textContent);
        totalValor = totalValor - valorUnita4;
        localStorage.setItem("total", totalValor);
        document.getElementById("TotalCompra").innerHTML = localStorage.getItem("total");
    }

}

function quitarCompra5(){
    if(acomulador > 0){
        acomulador = acomulador - 1;
        document.getElementById("addCompra").innerHTML = acomulador;
    }
    if (totalValor > 0){
        let valorUnita5 = parseInt(document.getElementById("valorProducto5").textContent);
        totalValor = totalValor - valorUnita5;
        localStorage.setItem("total", totalValor);
        document.getElementById("TotalCompra").innerHTML = localStorage.getItem("total");
    }

}

function quitarCompra6(){
    if(acomulador > 0){
        acomulador = acomulador - 1;
        document.getElementById("addCompra").innerHTML = acomulador;
    }
    if (totalValor > 0){
        let valorUnita6 = parseInt(document.getElementById("valorProducto6").textContent);
        totalValor = totalValor - valorUnita6;
        localStorage.setItem("total", totalValor);
        document.getElementById("TotalCompra").innerHTML = localStorage.getItem("total");
    }

}

function quitarCompra7(){
    if(acomulador > 0){
        acomulador = acomulador - 1;
        document.getElementById("addCompra").innerHTML = acomulador;
    }
    if (totalValor > 0){
        let valorUnita7 = parseInt(document.getElementById("valorProducto7").textContent);
        totalValor = totalValor - valorUnita7;
        localStorage.setItem("total", totalValor);
        document.getElementById("TotalCompra").innerHTML = localStorage.getItem("total");
    }

}

function quitarCompra8(){
    if(acomulador > 0){
        acomulador = acomulador - 1;
        document.getElementById("addCompra").innerHTML = acomulador;
    }
    if (totalValor > 0){
        let valorUnita8 = parseInt(document.getElementById("valorProducto8").textContent);
        totalValor = totalValor - valorUnita8;
        localStorage.setItem("total", totalValor);
        document.getElementById("TotalCompra").innerHTML = localStorage.getItem("total");

    }
}

function quitarCompra9(){
    if(acomulador > 0){
        acomulador = acomulador - 1;
        document.getElementById("addCompra").innerHTML = acomulador;
    }
    if (totalValor > 0){
        let valorUnita9 = parseInt(document.getElementById("valorProducto9").textContent);
        totalValor = totalValor - valorUnita9;
        localStorage.setItem("total", totalValor);
        document.getElementById("TotalCompra").innerHTML = localStorage.getItem("total");
    }

}
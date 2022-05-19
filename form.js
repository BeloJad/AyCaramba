window.onload =iniciar;
function iniciar() {
    document.getElementById("submit").addEventListener("click", validar, false);
} 

function validaNombre (){
    var elemento = document.getElementById("nombre");
    if (elemento.value =="") {
        alert("Ingrese nombre");
        return false;
    }
    return true;
}

function validaTelefono (){
    var elemento = document.getElementById ("telefono");
    if (elemento.value =="") {
        alert("Ingrese número");
        return false;
    } if (isNaN(elemento.value)){
        alert("Debe ingresar un NUMERO");
        return false;
    }
    
    return true;
}

function validaMail (){
    var elemento = document.getElementById("mail");
    if  (elemento.value =="") {
        alert("Ingrese mail");
        return false;
    }
    return true;
}

function validaConsulta (){
    var elemento = document.getElementById("consulta");
    if (elemento.value =="") {
        alert("Ingrese consulta");
        return false;
    }
    return true;
}

function validar (e) {
    if (validaNombre() && validaTelefono() && validaMail() && validaConsulta() && confirm ("¿Enviar consulta?")){
        return true;
    }else {
        e.preventDefault();
        return false;
    }
}

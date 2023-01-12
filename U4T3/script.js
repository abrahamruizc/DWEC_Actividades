window.onload = iniciarEventos;

function iniciarEventos(){
   const enviar = document.getElementById("enviar");
   enviar.addEventListener("click", validaciones);
}

function validaciones(){
    let nombre = document.getElementById("nombre").value;
    let grupo = document.getElementById("grupo").value;
    let ano = document.getElementById("ano").value;
    let localizacion = document.getElementById("localizacion").value;
    
    if(campo20(nombre) == false|| nombre ==""){
        alert("el nombre no es correcto");
    } else if (campo20(grupo) == false|| grupo ==""){
        alert("el grupo no es correcto");
    } else if (compruebaAno(ano) == false || ano ==""){
        alert("el año de publicación no es correcto");
    } else if (compruebaLocalizacion(localizacion) == false){
        alert("la localización no es correcta");
    }

    if(campo20(nombre) && campo20(grupo) && compruebaAno(ano) && compruebaLocalizacion(localizacion)){
        eliminarEventos();
    }
}

function eliminarEventos(){
    enviar.removeEventListener("click", validaciones);
    alert("se elimina evento")
}

function campo20(texto) {
    const validacion = /^[a-zA-Z0-9]{0,20}$/;
    return validacion.test(texto);
}

function compruebaAno(ano){
    const validacion = /^[0-9]{4}$/;
    return validacion.test(ano);
}

function compruebaLocalizacion(localizacion){
    const validacion = /^[0-9]?$/;
    return validacion.test(localizacion);
}



window.onload = addEventListener("submit", validaciones);

function validaciones(){
    let nombre = document.getElementById("nombre").value;
    let grupo = document.getElementById("grupo").value;
    let ano = document.getElementById("ano").value;
    let localizacion = document.getElementById("localizacion").value;
    
    if(compruebaNombreGrupo(nombre) == false|| nombre ==""){
        alert("el nombre no es correcto");
    } else if (compruebaNombreGrupo(grupo) == false|| grupo ==""){
        alert("el grupo no es correcto");
    } 


}

function compruebaNombreGrupo(texto) {
    const validacion = /^[a-zA-Z0-9]{0,20}$/;
    return validacion.test(texto);
}


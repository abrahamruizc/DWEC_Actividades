let segundos =0;

let parar = false;
function actualizarTiempo(){
    
    document.getElementById("tiempo").innerHTML = segundos + " segundos";
    if(parar){
        alert("han pasado " + segundos);
    } else {
        segundos++;
        setTimeout("actualizarTiempo()", 1000);
    }
}

function detener(){
    parar = true;
}

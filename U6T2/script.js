window.onload = inicio;

function inicio() {
    let boton = document.getElementById("boton");
    boton.addEventListener("click",pulsar);
}

function pulsar(){

    prompt("introduce un texto");

}
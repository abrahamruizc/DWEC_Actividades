window.onload = inicio;

function inicio() {
    let boton = document.getElementById("boton");
    boton.addEventListener("click",pulsar);
    let borrarp = document.getElementById("borrarp");
    borrarp.addEventListener("click",borrarprimero);
    let borraru = document.getElementById("borraru");
    borraru.addEventListener("click",borrarultimo);
}

function borrarprimero(){
    let lista = document.getElementById("lista");

    lista.removeChild(lista.firstElementChild);

}

function borrarultimo(){
    let lista = document.getElementById("lista");

    lista.removeChild(lista.lastChild);
}

function pulsar(){

    let texto = prompt("introduce un texto");

    let li = document.createElement("li");
    li.textContent = texto;

    let lista = document.getElementById("lista");

    lista.appendChild(li);

    console.log(li);

}
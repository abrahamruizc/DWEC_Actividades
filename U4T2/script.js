const cuadros = document.querySelectorAll("td");
// let celda = document.getElementsByTagName("td");



for(i = 0; i< cuadros.length; i++){
    cuadros[i].addEventListener("click", comprobar);
}

// for(const entry of cuadros.entries()){
//     alert("mensaje")
// }

function comprobar(){
    alert("mensaje");
}

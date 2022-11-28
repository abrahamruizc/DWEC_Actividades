const cuadros = document.querySelectorAll("td");
const imagenes = document.querySelectorAll("img");
// let celda = document.getElementsByTagName("td");



for(i = 0; i< cuadros.length; i++){
    cuadros[i].addEventListener("click", function (){
        this.firstChild.style.display = "inline";
    //    for(i =0; i< imagenes.length; i++){
    //         console.log("entra");
    //         imagenes[i].style.display = "inline";
    //    }
    });
}

// for(const entry of cuadros.entries()){
//     alert("mensaje")
// }

function comprobar(){
    alert("mensaje");
}

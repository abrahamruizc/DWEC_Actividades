const cuadros = document.querySelectorAll("td");
const imagenes = document.querySelectorAll("img");

for(i = 0; i< cuadros.length; i++){
    cuadros[i].addEventListener("click", comprobarimagenes);
}

function comprobarimagenes(){
    this.firstChild.style.display = "inline";
    let clase = this.firstChild.className;
    console.log(clase);
    let contador= 0;
    for(e =0; e < cuadros.length; e++){
        if(cuadros[e].firstChild.className == clase && cuadros[e].firstChild.style.display == "inline"){
            contador++;
            console.log(contador);
            if(contador ==2){
                cuadros[e].style.backgroundColor = "green";
                this.style.backgroundColor= "green";
            }
        } else {
            cuadros[e].firstChild.style.display = "none";
        }

    }
}




// for(const entry of cuadros.entries()){
//     alert("mensaje")
// }


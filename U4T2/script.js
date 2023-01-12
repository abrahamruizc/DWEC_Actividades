const cuadros = document.querySelectorAll("td");
let puntuacion = parseInt(document.getElementById("puntuacion").value);

console.log(puntuacion)

setTimeout(() => {
    for(i = 0; i< cuadros.length; i++){
        cuadros[i].firstChild.style.display ="none";
        cuadros[i].addEventListener("click", comprobarimagenes);
    }
},1000);


function comprobarimagenes(){
    let imagen = this.firstChild.style.display = "inline";
    console.log(imagen);
    let clase = this.firstChild.className;
    console.log(clase);
    contadoriguales= 0;
    contadorinlines=0;
    let verdes=0;
    for(e = 0; e < cuadros.length; e++){
        if(cuadros[e].firstChild.style.display=="inline"){
            contadorinlines++;
            console.log(contadorinlines);
        }
        if(cuadros[e].firstChild.className == clase && cuadros[e].firstChild.style.display == imagen){
            contadoriguales++;
            verdes++;
            console.log(contadoriguales);
        } 


        if(verdes == 2){
            verdes=0;
            puntuacion= (puntuacion + 1);
            document.getElementById("puntuacion").value = puntuacion;
        }

        if(contadorinlines == 2){
            contadorinlines=0;
            for(o = 0; o < cuadros.length; o++){
                if(cuadros[o].firstChild.className == clase && cuadros[o].firstChild.style.display != imagen) {
                    for(c = 0; c < cuadros.length; c++){
                        cuadros[c].firstChild.style.display = "none";
                    }
                }
            }
        }
        if(contadoriguales ==2){
            for(o = 0; o < cuadros.length; o++){
                if(cuadros[o].firstChild.className== clase){
                    cuadros[o].removeEventListener("click", comprobarimagenes);
                    cuadros[o].style.backgroundColor = "green";
                    cuadros[o].firstChild.style.display ="none";
                    
                }
            }
        }
        

    }
    
    
}


const cuadros = document.querySelectorAll("td");

for(i = 0; i< cuadros.length; i++){
    // let clase = cuadros[i].firstChild.className;
    // console.log(clase);
    cuadros[i].addEventListener("click", function (){
        this.firstChild.style.display = "inline";
        let clase = this.firstChild.className;
        let contador= 0;
        for(e =0; e < cuadros.length; e++){
            if(cuadros[e].firstChild.className == clase && cuadros[e].firstChild.style.display == "inline"){
                contador++;
                console.log(contador);
                if(contador ==2){
                    cuadros[e].style.backgroundColor = "green";
                    this.style.backgroundColor= "green";
                }

            }

        }
    });
}


// for(const entry of cuadros.entries()){
//     alert("mensaje")
// }


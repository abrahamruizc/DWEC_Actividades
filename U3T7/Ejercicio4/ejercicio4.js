const prompt = require('prompt-sync')({sigint: true});

let cadena = prompt("introduce una cadena ");

function minuscula(cadena){

let valor = parseInt(prompt("introduce un valor "));
let numero= valor;
let resultado="";
let contador =0;



for (let i =0; i< cadena.length; i++){
    contador++;
    if(contador == valor){
        valor = valor + numero;
        if(cadena[i] === cadena[i].toUpperCase()){
            resultado += cadena[i].toLowerCase();
        }
        if(cadena[i] === cadena[i].toLowerCase()){
            resultado += cadena[i].toUpperCase();
        }
    } else {
        resultado+= cadena[i];
    }
    
}
    
return resultado;
}

console.log(minuscula(cadena));
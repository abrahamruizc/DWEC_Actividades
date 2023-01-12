const prompt = require('prompt-sync')({sigint: true});

let entero = prompt("introduce un numero entero ");

function flecha(entero){
    if(entero %2 ==0){
        return true;
    } else {
        return false;
    }
}

console.log(flecha(entero));



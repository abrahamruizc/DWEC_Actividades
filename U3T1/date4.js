/*Crea un programa que muestre la hora actual en diferentes formatos, según el valor que introduzca el usuario por parámetro:*/

//creamos variable prompt
const prompt = require('prompt-sync')({sigint: true});

//variable para elegir el formato (lo parseamos para que entre en el case)
let elige = parseInt(prompt("introduce el formato de hora actual: "));

let fecha= new Date();

//switch para los distintos formatos
switch(elige) {
    case 1:
        //muestra la hora hasta los segundos
        console.log(fecha.toTimeString().substring(0,8)); 
        break;
    case 2:
        //muestra la hora teniendo en cuenta si es PM o AM
        console.log(fecha.toLocaleString('en-US', {hour:'numeric', minute:'numeric', second:'numeric', hour12:'true'}));
        break;
    default:
    console.log("no es una opcion valida");
}
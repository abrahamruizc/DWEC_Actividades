const prompt = require('prompt-sync')({sigint: true});


let indices =[];
let array1 = new Array(4,0,3,4,7,3,5,8,1,8,8,0,2,3,1,2,5,7,3,2,5,1);
let numero3 = 3;

let posicion = array1.indexOf(numero3);
while(posicion !=-1){
    indices.push(posicion);
    posicion = array1.indexOf(numero3, posicion+1);
}

console.log("1.  " + indices);


let pares = [];
let impares = [];
for(let i = 0; i< array1.length; i++){
    if(array1[i] % 2 ==0){
        pares.push(array1[i]);
        
    } else {
        impares.push(array1[i]);
    }

}

let suma = pares.concat(impares);

console.log("2.  " +suma);


let array2 = [232,56,33,876,32,985,729,36,184];
let mayor=0;
for(let u = 0; u < array2.length; u++){
    if(array2[u] > mayor){
        mayor = array2[u];
    }
}
console.log("3.  " +mayor);

let fecha = new Date(2001,1,10).getTime();

let usarsegundos = new Date(fecha);

console.log("4.  " +usarsegundos);


let proxcumple = new Date(2024,1,10).getTime();
let actual = new Date();

let milisegundos = proxcumple - actual;

console.log("5.  "+ milisegundos);

let fechaactual = new Date();
let fechaactual2 = new Date();
fechaactual.setHours(26);
fechaactual2.setMinutes(65);
console.log("7.  " +fechaactual);
console.log("7.  " +fechaactual2);

let ultimafecha = new Date(2018,2,20);

ultimafecha.setDate(35);

console.log("8.  " +ultimafecha);
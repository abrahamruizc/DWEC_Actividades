/* Crea un programa que pida por parámetro tu cumpleaños (no hace falta el año) y 
saque todos los años en que tu cumpleaños va a caer en domingo desde este año hasta el año 2100*/

//creamos variable prompt
const prompt = require('prompt-sync')({sigint: true});

//pedimos por consola el dia y el mes de tu cumpleaños
const dia =parseInt(prompt('introduce el dia de tu cumpleaños: '));
console.log(dia);
const mes = parseInt(prompt('introduce el mes de tu cumpleaños: '));
console.log(mes);
// guardamos en una variable el año actual
let anoactual = new Date().getFullYear();
console.log(anoactual);
// guardamos aqui la fecha de nuestro cumpleaños de este año
let cumpleaños = new Date(anoactual, mes-1, dia);

//creamos un array y recorremos la variable anoactual hasta el año 2100, recojemos los dias que caen en domingo y los metemos en el array
let array = new Array;

for (let i = anoactual; i < 2100; i++){
    cumpleaños.setFullYear(i);
    if(cumpleaños.getDay() == 0) {
        array.push(i);
    }
}
//mostramos
console.log(array);
// Crea un programa que pida al usuario un número entero por pantalla y muestre:

// Su valor exponencial.
// El número con 4 decimales.
// El número en binario.
// El número en octal.
// El número en hexadecimal.
// Utiliza para ello los métodos del objeto Number.

// Como datos de muestra, si metes 50, deberías obtener:

// 5e1 / 50.0000 / 00110010 / 62 / 0x32


//creamos variable prompt
const prompt = require('prompt-sync')({sigint: true});

let numeroentero = parseInt(prompt("introduce un numero entero "));

//creamos las variables y le aplicamos los metodos de number para mostrar los valores comvertidos
let exponencial = numeroentero.toExponential();
let decimales = numeroentero.toFixed(4);
let binario = numeroentero.toString(2);
let octal = numeroentero.toString(8);
let hexadecimal = numeroentero.toString(16);

console.log(exponencial + " / " + decimales + " / " + binario + " / " + octal + " / 0x" + hexadecimal);
// Crea un programa que pida al usuario su nombre y apellidos y muestre:

// El tamaño del nombre más los apellidos (sin contar espacios).
// La cadena en minúsculas y en mayúsculas.
// Que divida el nombre y los apellidos y los muestre en 3 líneas, donde ponga Nombre: / Apellido1: / Apellido 2:
// Una propuesta de nombre de usuario, compuesto por la inicial del nombre, el primer apellido y la inicial del segundo apellido: ej. Para José María García Durán sería jgarciad.
// Una propuesta de nombre de usuario compuesto por las tres primeras letras del nombre y delos dos apellidos: ej. josgardur.


//creamos variable prompt
const prompt = require('prompt-sync')({sigint: true});

//almacenamos en las variables el nombre y los apellidos
let nombre = prompt("introduce tu nombre ");
let apellidos = prompt("introduce tus apellidos ");

//dividimos los apellidos y los almacenamos en un array para usarlos mas adelante
let separados = apellidos.split(" ");
console.log(separados);


let suma = nombre+separados[0]+separados[1];
//nombre sin contar espacios
console.log(suma);

//cadena en minusculas y mayusculas
console.log(suma.toUpperCase() + " " + suma.toLowerCase());


console.log( "Nombre: "+nombre+ " / Apellido1: " + separados[0] + " / Apellido2: "+ separados[1]);

//propuesta de nombre de usuario
let usuario = nombre.charAt(0)+separados[0]+separados[1].charAt(0);

console.log(usuario);

//propuesta de nombre compuesta por las tres primeras letras del nombre y de los 2 apellidos
//usamos los substring para recojer las 3 partes del nombre y del apellido
let usuariootro = nombre.substring(0, 3)+ separados[0].substring(0,3)+separados[1].substring(0,3);

console.log(usuariootro);


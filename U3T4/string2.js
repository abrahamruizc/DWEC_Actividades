// Crea un programa que pida al usuario una propuesta de contraseña y  compruebe si cumple con los siguientes requisitos.

// Tiene entre 8 y 16 caracteres.
// Tiene una letra mayúscula.
// Tiene una letra minúscula.
// Tiene un número.
// Tiene uno de los siguientes valores: guión alto, guión bajo, arroba,  almohadilla, dólar, tanto por ciento o ampersand.
// Si cumple con todos los requisitos se considera una contraseña segura, de lo  contrario mostrará que es una contraseña no segura.


//creamos variable prompt
const prompt = require('prompt-sync')({ sigint: true });

//pedimos la contraseña 
let contrasena = prompt("introduce una contraseña ");
//creamos un contador para ver si el numero de caracteres es el correcto

let contador = 0;

//creamos booleanas para comprobar en el bucle si existe ese tipo de valor
let numero = false;
let valor = false;
let minuscula = false;
let mayuscula = false;


//recorremos la cadena y comprobamos que se cumplan todos los requisitos
for (let i = 0; i < contrasena.length; i++) {
    contador++;
    if (!isNaN(contrasena[i])) {
        numero = true;
    } else if (contrasena[i] == "-" || contrasena[i] == "_" ||
        contrasena[i] == "@" || contrasena[i] == "#" || contrasena[i] == "$" ||
        contrasena[i] == "%" || contrasena[i] == "&") {
        valor = true;
    } else if (contrasena[i] == contrasena[i].toUpperCase()){
        minuscula = true;
    } else if (contrasena[i] == contrasena[i].toLowerCase()){
        mayuscula = true;
    } 

}

//comprueba que los valores almacenados en las variables que recorrieron el bucle for sean correctas
if (contador >= 8 && contador <= 16 && numero == true && valor == true && minuscula == true && mayuscula == true) {
    //si es correcta es segura
    console.log("la contraseña es segura");
} else {
    //si es incorrecta no es segura
    console.log("la contraseña no es segura");
}
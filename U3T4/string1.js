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


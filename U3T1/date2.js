/* Crea un programa que pida por parámetro tu cumpleaños (no hace falta el año) y 
saque todos los años en que tu cumpleaños va a caer en domingo desde este año hasta el año 2100*/

console.log("introduce tu cumpleaños");
let dia = process.argv.getDay(parseInt(prompt("introduce un dia del 0-6"))); 
//const argumentos = process.argv.slice(2);
//console.log("argumentos", argumentos);
console.log(dia);


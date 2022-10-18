/*const argumentos = process.argv.slice(2);
console.log("argumentos", argumentos);*/

/*Crea un programa que muestre el número de días que quedan 
desde hoy hasta el fin de curso (por ejemplo, el 24 de junio).*/

let fecha = new Date();
let fincurso = new Date(2023, 05, 24);
fecha.getTime;
fincurso.getTime;

let resultado = fincurso - fecha;

console.log(fecha);
console.log(fincurso);
console.log(parseInt(resultado / (24*60*60*1000)));


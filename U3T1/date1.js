/*Crea un programa que muestre el número de días que quedan 
desde hoy hasta el fin de curso (por ejemplo, el 24 de junio).*/

//obtenemos la fecha actual y la almacenamos en en una variable
let fecha = new Date();

// almacenamos la fecha del 24  de junio 
let fincurso = new Date(2023, 06, 24);

// de cada fecha obtenemos los segundos
fecha.getTime;
fincurso.getTime;

// realizamos el calculo con la diferencia de segundos
let resultado = fincurso - fecha;

console.log(fecha);
console.log(fincurso);
// ultimo calculo para obtener el numero de dias parseado sin decimales
console.log(parseInt(resultado / (24*60*60*1000)));


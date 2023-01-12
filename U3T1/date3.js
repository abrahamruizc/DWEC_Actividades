/*Crea un programa que muestre la fecha actual en diferentes formatos, según el valor que introduzca el usuario por parámetro:*/

//creamos variable prompt
const prompt = require('prompt-sync')({sigint: true});

//creamos la variable para guardar la fecha actual
let fechaActual = new Date();


/** 
 * funcion para mostrar la fecha con formato de barras
 * @param {*} fecha  
 */
function fechaConBarras(fecha){
    
    console.log(fecha.toLocaleDateString());

}

/**
 * funcion para mostrar la fecha en español
 * @param {*} fecha 
 */
function fechaespanol(fecha){

    //creamos un array con los dias de la semana ordenados de 0 a 6
    const dias = [
        'Domingo',
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado',
      ];
      //obtenemos el nombre del dia basado en el array creado anteriormente 
      const numeroDia = new Date(fecha).getDay();
      const nombreDia = dias[numeroDia];


        console.log(nombreDia+","+ fecha.getUTCDate() +" de " + fecha.toLocaleString('es', { month: 'long' }) + " de " + fecha.getUTCFullYear() + ".");

}
/**
 * funcion para mostrar la fecha en ingles
 * @param {*} fecha 
 */
function fechaingles(fecha){
   

    console.log(fecha.toLocaleDateString('en', {weekday: 'long'})+","+fecha.toLocaleDateString('en', {month: 'long'})+" " + fecha.getUTCDate() + ","+ fecha.getUTCFullYear()+".");

}

//mostramos resultado de las funciones
fechaConBarras(fechaActual);

fechaespanol(fechaActual);

fechaingles(fechaActual);



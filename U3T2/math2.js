// Crea un programa que pida al usuario el valor del radio y muestre por pantalla:

// El valor del radio.
// El valor del diámetro.
// El valor del perímetro de la circunferencia.
// El valor del área del círculo.
// El valor del área de la esfera.
// El valor del volumen de la esfera.
// El valor de Pi debes obtenerlo del objeto Math, no introducirlo manualmente. Debes escribir al lado si son cm, o cm2, o cm3. Como datos de muestra, si metes 5, deberías obtener aproximadamente:
// 5 / 10 / 31,41 /78,54 / 314,15 / 523,59.

//creamos variable prompt
const prompt = require('prompt-sync')({sigint: true});


//creamos una variable para cada calculo que vamos a mostrar
let radio = parseFloat(prompt("introduce el valor del radio "));
let diametro = radio * 2;
let perimetro = Math.PI * diametro;
let area = Math.PI * radio ** 2;
let esfera = 4 * Math.PI * (radio * radio);
let volumenesfera = 4/3 * Math.PI * Math.pow(radio,3);


console.log(radio + " cm / " +  diametro + " cm / " + perimetro  + " cm / "+  area  + " cm2 / " + esfera + " cm3 / " + volumenesfera + " cm3");
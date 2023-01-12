// Crea un programa que pida al usuario que elija una opción del siguiente menú:

// Potencia.
// Raíz.
// Redondeo.
// Trigonometría.
// Si el usuario introduce 1, se le deberá pedir una base y un exponente y se mostrará el resultado en pantalla (La potencia de X elevado a Y es: )

// Si el usuario introduce 2, se le pedirá un número (no negativo) y se mostrará el resultado en pantalla (La raíz de X es: )

// Si el usuario introduce 3, se le pedirá un decimal por pantalla y se mostrará el redondeo al entero más próximo, al alta y a la baja.

// Si el usuario introduce 4, se le pedirá un ángulo (entre 0 y 360) y se le mostrarán por pantalla los valores trigonométricos del seno, coseno y tangente.


//creamos variable prompt
const prompt = require('prompt-sync')({sigint: true});

//variable para elegir la opcion del switch
let opcion = parseInt(prompt("introduce una opcion "));

switch(opcion){
    case 1:
        //creamos variables de base y exponente
        let base = parseFloat(prompt("introduce una base "));
        let exponente = parseFloat(prompt("introduce exponente "));
        //calculamos en esta variable el exponente
        let elevado = Math.pow(base, exponente);

        console.log("La potencia de " + base + " elevado a " + exponente + " es: " + elevado);

        break;
    case 2:
        //creamos la variable para calcular mas tarde la raiz
        let numeropositivo = parseFloat(prompt("introduce un numero positivo "));
        let raiz = Math.sqrt(numeropositivo);

        console.log("La raíz de " + numeropositivo + " es: " + raiz);
        break;
    case 3:
        //creamos variables y aplicamos el redondeo al alza y a la baja
        let decimal = parseFloat(prompt("introduce un numero decimal "));
        let redondeoalta= Math.round(decimal);
        let redondeobaja= Math.floor(decimal);

        console.log("Numero a la alta: " + redondeoalta + " Numero a la baja: " + redondeobaja);

        break;
    case 4:
        //creamos variables y aplicamos con otras tres el seno, coseno y tangente
        let angulo = parseInt(prompt("introduce un angulo entre 0 y 360 "));
        let seno = Math.sin(angulo);
        let coseno = Math.cos(angulo);
        let tangente = Math.tan(angulo);

        console.log("Seno: "+ seno + " Coseno "+ coseno + " tangente " + tangente);
        break;
    default:
        console.log("no es una opcion valida");
}


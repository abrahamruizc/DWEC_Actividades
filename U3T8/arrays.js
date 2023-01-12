let array= [objeto,objeto1,objeto2,objeto3];


let opciones = parseInt(prompt("1-Mostrar número de discos.\n2-Mostrar listado de discos \n3-Mostrar un intervalo de discos\n4-Añadir un disco\n5- Borrar un disco\n6-Consultar un disco"));


switch (opciones) {
    case 1:
    MostrarNElementos(array);
    break;
    case 2:
    MostrarListadoPaises(array);
    break;
    case 3:
    IntroduceIntervalos(array);
    break;
    case 4:
    AnadirPais(array);
    break;
    case 5:
    Borrar(array);
    break;
    case 6:
    Consultar(array);
    break;
    default:
        alert("no es una opcion valida");
}


function MostrarListadoPaises(array){
    let pregunta = parseInt(prompt("¿como quieres mostrar los discos?\n1-mostrar sin orden\n2-mostrar del reves\n3-Alfabéticamente"));
    switch(pregunta){
        case 1:
            MostrarArray(array);
            break;
        case 2:
            ElementosAlreves(array);
            break;
        case 3:
            ElementosAlfabeticamente(array);
            break;
        default:
            alert("no es una opcion valida");
    }

}

function IntroduceIntervalos(array){
    let inicio = prompt("Introduzca el inicio");
    let final = prompt("introduzca el final");
    Intervalo(array, inicio, final)
}


function AnadirPais(array){
let pregunta = parseInt(prompt("¿Donde quieres introducir el disco?\n1-al principio\n2-al final"));
let disc= new disco();
switch(pregunta){
    case 1:
        AnadirInicio(array, disc);
        break;
    case 2:
        AnadirFinal(array, disc);
        break;
    default:
        alert("no es una opcion valida");
}

}

function Borrar(array){
let pregunta = parseInt(prompt("¿Donde quieres borrar?\n1-al principio\n2-al final"));
switch(pregunta){
    case 1:
        BorrarPrincipio(array);
        break;
    case 2:
        BorrarFinal(array);
        break;
    default:
        alert("no es una opcion valida");
}
}

function Consultar(array){
let pregunta = parseInt(prompt("¿Por que quieres consultar?\n1-por posición\n2-por nombre"));
let posicion= 0;
let nombre="";
switch(pregunta){
    case 1:
        posicion = prompt("introduce la posición");
        ConsultarPosicion(array, posicion);
        break;
    case 2:
        nombre = prompt("introduce el nombre");
        ConsultarNombre(array, nombre);
        break;
    default:
        alert("no es una opcion valida");
}
}

/*funciones internas*/

function MostrarNElementos(array){
    console.log(array.length);
    document.write("<p>Numero de discos: " + array.length + "</p>");
}

function MostrarArray(array){
    for(let i =0; i< array.length; i++){
        document.write("<p>" + array[i].mostrar() +  "</p>");
        console.log(array[i].mostrar);
    }
}

function ElementosAlreves(array){
    for(let i =array.length -1; i>=0; i--){
        document.write("<p>" + array[i].mostrar() +  "</p>");
    }
    console.log(array);
}

function ElementosAlfabeticamente(array){
    let nuevoarray = Array(array.length);
    for(let i =0; i< array.length; i++){
        nuevoarray[i] = array[i];
    }
    nuevoarray.sort();
    for(let u = 0; u<array.length;u++){
        document.write("<p>" + array[u].mostrar() +  "</p>");
    }
    console.log(nuevoarray);
    console.log(array);
}

function AnadirInicio(array, disco){
    array.unshift(disco);
    document.write("<p>As añadido al princio: " + disco +  "</p>");
    for(let i =0; i< array.length; i++){
        document.write("<p>" + array[i].mostrar() +  "</p>");
        console.log(array[i].mostrar);
    }

}

function AnadirFinal(array, disco){
    array.push(disco);
    document.write("<p>As añadido al final: " + disco +  "</p>");
    for(let i =0; i< array.length; i++){
        document.write("<p>" + array[i].mostrar() +  "</p>");
        console.log(array[i].mostrar);
    }
}

function BorrarPrincipio(array){
    let principio = array[0];
    array.shift();
    document.write("<p>borraste: " + principio +  "</p>");
    for(let i =0; i< array.length; i++){
        document.write("<p>" + array[i].mostrar() +  "</p>");
        console.log(array[i].mostrar);
    }
}

function BorrarFinal(array){
    let final = array[array.length -1];
    array.pop();
    document.write("<p>borraste: " + final +  "</p>");
    for(let i =0; i< array.length; i++){
        document.write("<p>" + array[i].mostrar() +  "</p>");
        console.log(array[i].mostrar);
    }
}

function Intervalo(array, inicio, final){
    document.write("<p>intervalo de discos:" + array.slice(inicio, final) +  "</p>");
}

function ConsultarPosicion(array, posicion){
    for(let i =0; i< array.length; i++){
        if(i == posicion){
            document.write("<p>El disco de la posicion " + posicion + " es: " + array[i].mostrar() + "</p>");
        }
        console.log(array[i].mostrar);
    }
    
}

function ConsultarNombre(array, nombre){
    let existe=false;
    for(let i =0; i< array.length; i++){
        if(array[i].nombre == nombre){
            document.write("<p>El disco " + nombre + " tiene la posicion: " + (i+1) + "</p>");
            existe = true;
            break;
        }
    }
    if(existe == false){
        document.write("<p>El disco " + nombre + " no esta registrado </p>");
    }

}

let array= ["Finlandia","Noruega","España","Portugal","Italia","Alemania"];


let opciones = parseInt(prompt("1-Mostrar número de países.\n2-Mostrar listado de países \n3-Mostrar un intervalo de países\n4-Añadir un país\n5- Borrar un país\n6-Consultar un país"));


switch (opciones) {
    case 1:
    MostrarNElementos(array);
    break;
    case 2:
    MostrarListadoPaises(array);
    break;
    case 3:
        
    break;
    case 4:
        
    break;
    case 5:
        
    break;
    case 6:
        
    break;
    default:
        alert("no es una opcion valida");
}


function MostrarNElementos(array){
    console.log(array.length);
    document.write("<p>Numero de paises: " + array.length + "</p>");
}

function MostrarListadoPaises(array){
    let pregunta = parseInt(prompt("¿como quieres mostrar los paises?\n1-mostrar sin orden\n2-mostrar del reves\n3-Alfabéticamente"));
    switch(pregunta){
        case 1:
            document.write("<p>Listado de paises sin ordenar:" + array +  "</p>");
            break;
        case 2:
            
            break;
        case 3:
            break;
        default:
            alert("no es una opcion valida");
    }

}
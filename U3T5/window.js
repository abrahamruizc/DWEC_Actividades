let ventana;

function cerrarcreada(){
    if (ventana === undefined){
        alert("no puedes cerrar la ventana ya esta cerrada");
    } else {
        ventana.close();
    }
}

function ventanaNueva(){
    let respuesta = prompt("¿estas de acuerdo?");
    switch(respuesta){
        case "si":
              ventana = open("", "Nueva Ventana", "width=200, height=80");
              ventana.moveTo(500,500);
              ventana.document.write("<p>boton cerrar la ventana</p><button onclick='javascript:window.close()'>Cerrar Ventana</button>");
            break;
        case "no":
                alert("No se abrira una nueva ventana");
            break;
        default:
            alert("no es una opción valida")
    }
}


function mover(){
    window.moveTo(100,100);
}



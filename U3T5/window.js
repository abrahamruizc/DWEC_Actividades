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
    ventana.moveTo(100,100);
}

function aumentarventana(){
    ventana.resizeBy(10, 10);
}

function fijo() {
    ventana.resizeTo(400, 200);
}

function ponerscroll(){
    scrollTo(0, 0);
}

function poneradiez(){
    scrollTo(0, 10);
}

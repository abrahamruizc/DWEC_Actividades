let array = new Array();

class socio{
    constructor(dni,nombre,apellidos,fechanac,localidad){
        this.dni = dni;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fechanac = fechanac;
        this.localidad = localidad;

        this.categoria = function(){
            let fecha = new Date().getFullYear();
            let fechana = this.fechanac.split("/");
            let calculo = fecha - fechana[0];
            console.log(calculo);
            if(calculo >=8 && calculo<=9){
                return this.categoria = "Benjamín";
            } else if (calculo >=10 && calculo<=11){
                return this.categoria = "Alevín";
            } else if (calculo >=12 && calculo<=13){
                return  this.categoria = "Infantil";
            } else if (calculo >=14 && calculo<=15){
                return   this.categoria = "Cadetes";
            } else if (calculo >=17 && calculo<=18){
                return  this.categoria = "Juvenil";
            } else if (calculo >=19 && calculo!=fecha){
                return  this.categoria = "Senior";
            } else{
                return  this.categoria = "No posee";
            }
        }
        
    }

    modificarLocalidad(localidad){
        this.localidad = localidad;
    }

    mostrarDatos(){
        document.write("<p> DNI: " + this.dni + " Nombre: " + this.nombre + " Apellido: " + this.apellidos + " Fecha Nacimiento: " + this.fechanac + " Localidad: " +this.localidad  +"</p>");
    }

    mostrarDatosTabla(){
        document.write("<p> DNI: " + this.dni + " Nombre: " + this.nombre + " Apellido: " + this.apellidos + " Fecha Nacimiento: " + this.fechanac + " Localidad: " +this.localidad  + " Categoria: "+ this.categoria() +"</p>");
    }

}

function darAlta(){
    let dni = prompt("introduce dni del socio");
    let nombre = prompt("introduce nombre del socio");
    let apellidos = prompt("introduce apellidos del socio");
    let fechanac = prompt("introduce fecha de nacimiento del socio");
    let localidad = prompt("introduce localidad del socio");

    let socionuevo = new socio(dni, nombre, apellidos, fechanac, localidad);

    array.push(socionuevo);

    console.log(array);
    
}

function darBaja(){
    let pregunta = parseInt(prompt("¿por que quieres dar de baja?\n1-por numero de socio\n2-por DNI"));

    switch(pregunta){
        case 1:
            let numero = parseInt(prompt("introduce el numero de socio que quieres borrar"));
            array.splice(numero, 1);
            console.log(array);
            break;
        case 2:
            let dni = prompt("introduce el dni del socio a borrar");
            for(let i = 0; i< array.length; i++){
                if(array[i].dni == dni){
                    array.splice(i, 1);
                }
            }
            console.log(array);
            break;
        default:
        alert("no es una opción valida");
    }
}

function modificar(){
    let numero = parseInt(prompt("introduce el numero del socio al que quieres modificar la localidad"));
    let localidad = prompt("introduce la nueva localidad");
    array[numero].modificarLocalidad(localidad);
    console.log(array);
}


function verTabla(){
    for(let i = 0; i< array.length; i++){
        array[i].mostrarDatosTabla();
    }
}

function buscarSocio(){
    let pregunta = parseInt(prompt("¿porque quieres buscar?\n1-por DNI\n2-por nombre y apellidos"));

    switch(pregunta){
        case 1:
            let dni = prompt("introduce el dni del socio");
            for(let i =0; i< array.length; i++){
                if(array[i].dni == dni){
                    array[i].mostrarDatos();
                }
            }
            break;
        case 2:
            let nombre= prompt("introduce el nombre del socio");
            let apellido = prompt("introduce el apellido del socio");
            for(let i =0; i< array.length; i++){
                if(array[i].nombre == nombre && array[i].apellidos == apellido){
                    array[i].mostrarDatos();
                }
            }
            break;
        default:
        alert("no es una opción valida");
    }
}

function buscarCategoria(){
    let categoria = prompt("introduce la categoria del socio");
    let fecha = new Date().getFullYear();
    let ano;
    
    if(categoria == "Benjamín"){
        ano = fecha -8;
    } else if(categoria == "Alevín"){
        ano = fecha - 10;
    } else if(categoria == "Infantil"){
        ano = fecha - 12;
    } else if(categoria == "Cadetes"){
        ano = fecha - 14;
    } else if(categoria == "Juvenil"){
        ano = fecha - 16;
    } else if(categoria == "Senior"){
        ano = fecha - 19;
    } 
    
    

    for(let i =0; i < array.length; i++){
        let otrafecha = array[i].fechanac.split("/");
        if(otrafecha[0] == ano){
            array[i].mostrarDatos();
        }
    }

}

function buscarLocalidad(){
    let localidad = prompt("introduce la localidad de los socios que buscas");

    for(let i =0; i < array.length; i++){
        if(array[i].localidad == localidad){
            array[i].mostrarDatos();
        }
    }

}
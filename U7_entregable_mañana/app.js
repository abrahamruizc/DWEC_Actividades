window.onload = inicio;

let array_global = [];
let persona;

function inicio(){
    let generar = document.getElementById("generar");
    generar.addEventListener("click" , getXML);
}

function getXML(){

    console.log("entra");

    if(window.XMLHttpRequest){
        let xml = new XMLHttpRequest();

        xml.onreadystatechange = () => {
            if(xml.readyState === 4 && xml.status === 200){
                let datos = JSON.parse(xml.responseText);
                procesar_datos(datos);

            }
        }
        xml.open("GET", "https://randomuser.me/api/?nat=es");
        xml.send();

    } else {
        console.log("no soporta AJAX");
    }

}

function procesar_datos(datos){
    console.log(datos);
    let informacion = datos.results;

    for (const iterator of informacion) {
        console.log(iterator);

        let calle = iterator.location.street.name + " " + iterator.location.street.number;
        let nombre = iterator.name.first + " " + iterator.name.last;
        //console.log(calle);

        persona = {
            name: nombre,
            phone: iterator.phone,
            street: calle,
            email: iterator.email,
            image: iterator.picture.medium,
        }
        console.log(persona);

        let img = document.createElement("img");
        img.setAttribute("class", "card-img-top");
        img.src = iterator.picture.medium;
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        let cardbody = document.createElement("div");
        cardbody.setAttribute("class", "card-body");
        let pnombre = document.createElement("p");
        pnombre.setAttribute("class", "card-text");
        pnombre.textContent = nombre;
        let pdireccion = document.createElement("p");
        pdireccion.setAttribute("class", "card-text");
        pdireccion.textContent = calle;
        let ptelefono = document.createElement("p");
        ptelefono.setAttribute("class", "card-text");
        ptelefono.textContent = iterator.phone;
        let pemail = document.createElement("p");
        pemail.setAttribute("class", "card-text");
        pemail.textContent = iterator.email;
        let boton = document.createElement("button");
        boton.textContent = "Añade tabla";
        boton.addEventListener("click", meteTabla);

        let resultado = document.getElementById("resultado");
        resultado.innerHTML ="";

        card.appendChild(img);
        cardbody.appendChild(pnombre);
        cardbody.appendChild(pdireccion);
        cardbody.appendChild(ptelefono);
        cardbody.appendChild(pemail);
        cardbody.appendChild(boton);
        card.appendChild(cardbody);
    
        resultado.appendChild(card)

    }



}

function meteTabla(){
    let existe = false;
    for (const iterator of array_global) {
        if(iterator.name === persona.name) {
            existe = true;
        }
    }

    if(!existe){
        array_global.push(persona);
    }
    
    let encabezado = ["nombre","calle","numero","email"];


    let resultado = document.getElementById("tabla");
    resultado.innerHTML = "";
    let table = document.createElement("table");
    let fila = document.createElement("tr");

    for (const iterator of encabezado) {
        let th = document.createElement("th");
        th.textContent = iterator;
        fila.appendChild(th);
    }
    table.appendChild(fila);
    for (const iterator of array_global) {
        let tr = document.createElement("tr");
        for (const key in iterator) {
            console.log(iterator[key]);
            let td = document.createElement("td");
            td.textContent = iterator[key];
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    
    
    resultado.appendChild(table);
    
    
    console.log(array_global);

}
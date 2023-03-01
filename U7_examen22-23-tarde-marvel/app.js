window.onload = inicio;

let array_global = [];
let array_poner = [];

const API_BASE_URL = "https://gateway.marvel.com/";
const PRIVATE_API_KEY = "1147b7a9d8834133d07351f2ff885348bff69abb";
const PUBLIC_API_KEY = "31776e1257b3e14939158d6e152bb2ab";
const TS = "1000";
const HASH = md5(TS + PRIVATE_API_KEY + PUBLIC_API_KEY);


function inicio(){
    let cargar = document.getElementById("cargar");
    cargar.addEventListener("click", procesar);

    let xml = document.getElementById("xml");
    xml.addEventListener("click", meterDatos);

    let fetch = document.getElementById("fetch");
    fetch.addEventListener("click", getBase);

    let limpia = document.getElementById("limpia");
    limpia.addEventListener("click", limpiar);
}

function getBase() {
    fetch("get_marvel_characters.php")
    .then((response) => {
        if(response.ok){
            return response.json();
        }
    })
    .then((data) =>{
        console.log(data);
        //let datos = data.data.results;
        crearCards2(data);
    })
    .catch((error) => {
        console.log(error);
        document.getElementById("trazas").innerHTML = "error al traer los personajes de la BD";
    });
}

function crearCards2(datos) {
    document.getElementById("cards").innerHTML = "";
   
    console.log(datos);

    for (const iterator of datos) {
        
        let resultado = document.getElementById("cards");

        let img = document.createElement("img");
        img.setAttribute("class", "card-img-top");
        img.src = iterator.path;

        console.log(img);
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        card.setAttribute("style", "width: 16rem;");
        let cardbody = document.createElement("div");
        cardbody.setAttribute("class", "card-body");
        let pnombre = document.createElement("p");
        pnombre.setAttribute("class", "card-text");
        pnombre.textContent = iterator.name;
        let pmodif= document.createElement("p");
        pmodif.setAttribute("class", "card-text");
        pmodif.textContent = iterator.modified;
        
        

        card.appendChild(img);
        cardbody.appendChild(pnombre);
        cardbody.appendChild(pmodif);
        

        
        card.appendChild(cardbody);

        resultado.appendChild(card);
        document.getElementById("trazas").innerHTML = "Se han obtenido las cartas de la BD";
    }



}



function meterDatos(){

    let inputs = document.querySelectorAll("input");
    let usado = false;
    console.log(inputs);
    inputs.forEach(element => {
        //console.log(element);
        if(element.checked) {
            usado = true;
            console.log(element);
            for (const iterator of array_global) {
                if(iterator.name === element.id){
                    array_poner.push(iterator);
                }
            }
        }
    });

    console.log(array_poner);

    if(inputs.length != 0 && usado) {
        if(window.XMLHttpRequest){
            let xml = new XMLHttpRequest();
    
            xml.onreadystatechange = () =>{
                if(xml.readyState === 4 && xml.status === 200){
                    let datos = JSON.parse(xml.responseText);
                    console.log(datos);
    
                    document.getElementById("trazas").innerHTML = datos.resultado;
                } else if(xml.status != 200) {
                    console.log(xml.responseText);
                    document.getElementById("trazas").innerHTML = xml.responseText;
                }
            }
            xml.open("POST", "save_marvel_characters.php");
            xml.setRequestHeader("Content-Type", "application/json");
            xml.send(JSON.stringify(array_poner));
    
        } else {
            console.log("No soporta AJAX");
        }

    } else {
        document.getElementById("trazas").innerHTML = "Aun no se han cargado los personajes o seleccionado para introducir en la BD";
    }

}

function limpiar(){
    document.getElementById("trazas").innerHTML = "Se han limpiado las cartas correctamente";
    document.getElementById("cards").innerHTML = "";
}

function procesar(){
    fetch(`${API_BASE_URL}/v1/public/characters?apikey=${PUBLIC_API_KEY}&hash=${HASH}&ts=${TS}&limit=10&offset=0`)
    .then((response) => {
        if(response.ok){
            return response.json();
        }
    })
    .then((data) =>{
        console.log(data);
        let datos = data.data.results;
        crearCards(datos);
    })
    .catch((error) => {
        console.log(error);
        document.getElementById("trazas").innerHTML = "error al traer los personajes de la pagina oficial";
    });
}

function crearCards(datos) {
    document.getElementById("cards").innerHTML = "";
   
    console.log(datos);

    for (const iterator of datos) {
        
        let imagen = iterator.thumbnail.path + "." + iterator.thumbnail.extension; 

        let personaje = {
            id: iterator.id,
            name: iterator.name,
            modified: iterator.modified,
            path: imagen,
        }

        array_global.push(personaje);

        let resultado = document.getElementById("cards");
        
        console.log(personaje);

        let img = document.createElement("img");
        img.setAttribute("class", "card-img-top");
        img.src = imagen;
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        card.setAttribute("style", "width: 16rem;");
        let cardbody = document.createElement("div");
        cardbody.setAttribute("class", "card-body");
        let pnombre = document.createElement("p");
        pnombre.setAttribute("class", "card-text");
        pnombre.textContent = iterator.name;
        let pmodif= document.createElement("p");
        pmodif.setAttribute("class", "card-text");
        pmodif.textContent = iterator.modified;
        
        
        let Switch = document.createElement("div");
        Switch.setAttribute("class", "form-check form-switch");
        let Switchinput = document.createElement("input");
        Switchinput.setAttribute("type", "checkbox");
        Switchinput.setAttribute("class", "form-check-input");
        Switchinput.setAttribute("id", iterator.name);

        card.appendChild(img);
        cardbody.appendChild(pnombre);
        cardbody.appendChild(pmodif);
        for (const iterator2 of iterator.comics.items) {
            let parray= document.createElement("p");
            parray.setAttribute("class", "card-text");
            parray.textContent = iterator2.name;
            cardbody.appendChild(parray);
        }

        Switch.appendChild(Switchinput);
        cardbody.appendChild(Switch);
        card.appendChild(cardbody);

        resultado.appendChild(card);
        document.getElementById("trazas").innerHTML = "Se han obtenido y creado las cartas correctamente";
    }



}



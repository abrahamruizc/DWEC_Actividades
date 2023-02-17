window.onload = inicio;

function inicio() {
let botonxml = document.getElementById("xml");
botonxml.addEventListener("click",cargarTablaxml);
}


function cargarTablaxml() {
    
    if(window.XMLHttpRequest){
        xml = new XMLHttpRequest();

        xml.onreadystatechange = cargarTabla;
        xml.open("GET", "latest.json");
        xml.send();

    } else {
        console.log("No AJAX");
    }
}


function cargarTabla(){
    if(xml.readyState === 4 && xml.status === 200){

        let datos = JSON.parse(xml.responseText);
        console.log(datos);

        document.getElementById("tabla").innerHTML = "";
        let tabla = document.createElement("table");
        let tr = document.createElement("tr");
        let comunidad = document.createElement("th");
        

        tabla.appendChild(tr);
        


        datos.forEach(comunidad => {


        });

    }
}

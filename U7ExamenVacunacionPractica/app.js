window.onload = inicio;

comunidad_array = [];


function inicio() {
let botonxml = document.getElementById("xml");
botonxml.addEventListener("click",cargarTablaxml);

let botonfetch = document.getElementById("fetch");
botonfetch.addEventListener("click",cargarTablafetch);

}

function cargarTablafetch(){

    fetch("latest.json")
    .then((response) => {
        if(response.ok){
            return response.json();
        }
    })
    .then((data) => {
        procesar_datos(data);
    })
    .catch((err) => console.log(err));


}

function cargarTablaxml() {
    
    if(window.XMLHttpRequest){
        xml = new XMLHttpRequest();

        xml.onreadystatechange = () => {
            if(xml.readyState === 4 && xml.status === 200){
                let datos = JSON.parse(xml.responseText)
                procesar_datos(datos);
            }
        };
        xml.open("GET", "latest.json");
        xml.send();

    } else {
        console.log("No AJAX");
    }
}


function procesar_datos(datos){
    comunidad_array = [];
    for (const comunidad of datos) {
        if (comunidad.ccaa != "Totales"){
            comunidad_array.push(comunidad);
        }
    }
    document.getElementById("resultado").innerHTML = "datos cargados de la web";
    console.log(comunidad_array);
    insertar_comunidades(comunidad_array);
}


function insertar_comunidades(comunidades){
    fetch("insertar_comunidades.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comunidades),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          cargarTabla(data);
        })
        .catch((err) => console.log(err));

}


function cargarTabla(data){
    console.log(data);

    let tabla_resultado = document.getElementById("tabla");
        tabla_resultado.innerHTML = "";
        let tabla = document.createElement("table");
        let fila = document.createElement("tr");
        let comunidad;
        let encabezado = ["ccaa","dosisEntregadas","dosisAdministradas","dosisPautaCompletada","porcentajeEntradas","porcentajePoblacionAdministradas","porcentajePoblacionCompletas"];
        for (let index = 0; index < encabezado.length; index++) {
            comunidad = document.createElement("th");
            comunidad.textContent = encabezado[index];
            fila.appendChild(comunidad);
        }
        tabla.appendChild(fila);
        let td;
        let tr;
        for (const comunidad of data) {
            td = document.createElement("td");
            tr = document.createElement("tr");
            td.innerHTML = comunidad.ccaa;
            tr.appendChild(td);
            td = document.createElement("td");
            td.innerHTML = comunidad.dosisEntregadas;
            tr.appendChild(td);
            td = document.createElement("td");
            td.innerHTML = comunidad.dosisAdministradas;
            tr.appendChild(td);
            td = document.createElement("td");
            td.innerHTML = comunidad.dosisPautaCompletada;
            tr.appendChild(td);
            td = document.createElement("td");
            td.innerHTML =  parseFloat(comunidad.porcentajeEntregadas * 100).toFixed(2);
            tr.appendChild(td);
            td = document.createElement("td");
            td.innerHTML = comunidad.porcentajePoblacionAdministradas;
            tr.appendChild(td);
            td = document.createElement("td");
            td.innerHTML = comunidad.porcentajePoblacionCompletas;
            tr.appendChild(td);
            //console.log(comunidad);
            tabla.appendChild(tr);
        }
        
        console.log(fila);
        
        



        tabla_resultado.appendChild(tabla);

}

// function cargarTabla(){
//     if(xml.readyState === 4 && xml.status === 200){

//         let datos = JSON.parse(xml.responseText);
//         console.log(datos);

//         let tabla_resultado = document.getElementById("tabla");
//         tabla_resultado.innerHTML = "";
//         let tabla = document.createElement("table");
//         let fila = document.createElement("tr");
//         let comunidad;
//         let encabezado = ["ccaa","dosisEntregadas","dosisAdministradas","dosisPautaCompletada","porcentajeEntradas","porcentajePoblacionAdministradas","porcentajePoblacionCompletas"];
//         for (let index = 0; index < encabezado.length; index++) {
//             comunidad = document.createElement("th");
//             comunidad.textContent = encabezado[index];
//             fila.appendChild(comunidad);
//         }
        
//         console.log(fila);
//         tabla.appendChild(fila);
//         let tr = document.createElement("tr");
//         let td;

//         for (let index = 0; index < datos.length; index++) {
//             comunidad = datos[index];
//             if(comunidad.ccaa != "Totales"){

//                 let json_resultado = {
//                     ccaa: comunidad.ccaa,
//                     dosisEntregadas: comunidad.dosisEntregadas,
//                     dosisAdministradas: comunidad.dosisAdministradas,
//                     dosisPautaCompletada: comunidad.dosisPautaCompletada,
//                     porcentajeEntradas: comunidad.porcentajeEntradas,
//                     porcentajePoblacionAdministradas: comunidad.porcentajePoblacionAdministradas,
//                     porcentajePoblacionCompletas: comunidad.porcentajePoblacionCompletas
//                 }

//                 console.log(json_resultado);
                
//                 td = document.createElement("td");
                
//                 for (let index = 0; index < json_resultado.length; index++) {
//                     console.log(json_resultado[index]); 
                    
//                 }

//                for (const key in comunidad) {
//                 let resultado = document.createTextNode(comunidad[key]);
//                 console.log(resultado);
//                 td.textContent = resultado;
//                 //console.log(td);
//                 tr.appendChild(td);
                
//                }
                
               
//                 tabla.appendChild(tr);
//                 //td.textContent = comunidad.ccaa;
//                 //console.log(comunidad);



//             }
//         }

            

            

            


        
        
        
//         tabla_resultado.appendChild(tabla);

//     }
// }

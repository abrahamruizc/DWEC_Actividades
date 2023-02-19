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
        
        console.log(fila);
        tabla.appendChild(fila);
        let tr = document.createElement("tr");
        let td;

        for (let index = 0; index < datos.length; index++) {
            comunidad = datos[index];
            if(comunidad.ccaa != "Totales"){

                let json_resultado = {
                    ccaa: comunidad.ccaa,
                    dosisEntregadas: comunidad.dosisEntregadas,
                    dosisAdministradas: comunidad.dosisAdministradas,
                    dosisPautaCompletada: comunidad.dosisPautaCompletada,
                    porcentajeEntradas: comunidad.porcentajeEntradas,
                    porcentajePoblacionAdministradas: comunidad.porcentajePoblacionAdministradas,
                    porcentajePoblacionCompletas: comunidad.porcentajePoblacionCompletas
                }

                console.log(json_resultado);
                
                td = document.createElement("td");
                
                for (let index = 0; index < json_resultado.length; index++) {
                    console.log(json_resultado[index]); 
                    
                }

               for (const key in comunidad) {
                let resultado = document.createTextNode(comunidad[key]);
                //console.log(resultado);
                td.textContent = resultado;
                //console.log(td);
                tr.appendChild(td);
                
               }
                
               
                tabla.appendChild(tr);
                //td.textContent = comunidad.ccaa;
                //console.log(comunidad);



            }
        }

            

            

            


        
        
        
        tabla_resultado.appendChild(tabla);

    }
}

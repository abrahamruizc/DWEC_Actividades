window.onload = inicio;

function inicio() {
  descarga_archivo();
}

function descarga_archivo() {
  if (window.XMLHttpRequest) {
    peticion_http = new XMLHttpRequest();

    peticion_http.onreadystatechange = peticion;
    peticion_http.open("GET", "http://localhost:8090/U7T3/series.xml");
    peticion_http.send();
  } else {
    alert("No tienes soporte para AJAX");
  }
}

function peticion() {
  if (peticion_http.readyState === 4) {
    if (peticion_http.status === 200) {

        resultados = peticion_http.responseXML;
        let series = resultados.documentElement.getElementsByTagName("serie");
        console.log(series);
        
        let tabla = document.createElement("table");

        let body = document.getElementsByTagName("body").item(0);


        body.append(tabla);

      
        console.log(body);

        for(let i = 0; i < series.length; i++) {
          console.log(series[i].children);
          let fila = document.createElement("tr");

          let hijos = series[i].children;
          for(let j = 0; j < hijos.length; j++){
          console.log(hijos[j]);
          let hijo = hijos[j];
  
            switch(hijo.tagName) {
              case "titulo":
                let th = document.createElement("th");
                th.innerHTML = hijo.textContent;

                fila.appendChild(th);
                
                break;
              case "director":
                let director = document.createElement("td");
                let i = document.createElement("i");
                i.innerHTML = hijo.textContent;

                director.appendChild(i);
                fila.appendChild(director);
                break;
              case "ano":
                let ano = document.createElement("td");
                ano.innerHTML = hijo.textContent;

                if (hijo.textContent <= 2000){
                  ano.setAttribute("style", "color: red;");
                } else if (hijo.textContent >= 2001 && hijo.textContent <= 2010){
                  ano.setAttribute("style", "color: yellow;");
                } else {
                  ano.setAttribute("style", "color: green;");
                }


                fila.appendChild(ano);
                break;
              case "terminada":
                let terminada = document.createElement("td");
                let si = document.createElement("img");
                si.src = "cheque.png";
                si.setAttribute("style", "width:5%");
                let no = document.createElement("img");
                no.src = "cancel.png";
                no.setAttribute("style", "width:5%");
                if(hijo.textContent == "si"){
                  terminada.appendChild(si);
                } else {
                  terminada.appendChild(no);
                }

                fila.appendChild(terminada);
                break;
              default:
                let defaul = document.createElement("td");
                defaul.innerHTML = hijo.textContent;

                fila.appendChild(defaul);
            }
            tabla.appendChild(fila);
            
          }

          console.log(body);
        }
    }
  }
}

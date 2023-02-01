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

        for(let i = 0; i < series.length; i++) {
          console.log(series[i].children);
          let fila = document.createElement("tr");

          let hijos = series[i].children;
          for(let j = 0; j < hijos.length; j++){
          console.log(hijos[j]);
          let hijo = hijos[j];
            
            switch(hijo.tagName) {
              case "titulo":
                break;
              case "cadena":
                break;
              case "director":
                break;
              case "ano":
                break;
              case "terminada":
                break;
            } 

              
          }
        }

        

        let body = document.getElementsByTagName("body").item(0);

        let th = document.createElement("th");

        let tr = document.createElement("tr");

        tabla.appendChild(th);

        body.append(tabla);

      


        console.log(body);
        

    }
  }
}

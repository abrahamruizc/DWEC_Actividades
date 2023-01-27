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


        console.log(resultados);

        
        

    }
  }
}

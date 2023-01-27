window.onload = inicio;

function inicio() {
  
  let boton = document.getElementById("boton");
  boton.addEventListener("click", descarga_archivo);
}

function descarga_archivo() {
  if (window.XMLHttpRequest) {
    peticion_http = new XMLHttpRequest();
    let input = document.getElementById("input");
    
    peticion_http.onreadystatechange = muestra_contenido;
    peticion_http.open("GET", `http://localhost:8090/U7T2/localidad.php?localidad=${input.value}`);
    peticion_http.send();
  } else {
    alert("No tienes soporte para AJAX");
  }
}

function muestra_contenido() {
  if (peticion_http.readyState === 4) {
    if (peticion_http.status === 200) {

        let resultado = document.getElementById("resultado");
        resultado.textContent = peticion_http.responseText;
        console.log(resultado.textContent);
        if (resultado.textContent === "SI") {
          resultado.style.color = "green";
        } else {
          resultado.style.color = "red";
        }
    }
  }
}


let url = window.location;
window.onload = inicio;
console.log(url);
function inicio() {
  
  let input = document.getElementById("input");
  input.value = url;

  let boton = document.getElementById("boton");
  boton.addEventListener("click", descarga_archivo);
}

function descarga_archivo() {
  // Obtener la instancia del objeto XMLHttpRequest
  if (window.XMLHttpRequest) {
    peticion_http = new XMLHttpRequest();
    let input = document.getElementById("input");

    // Indicamos a qué función se debe llamar cuando cambie el estado de la petición
    peticion_http.onreadystatechange = muestra_contenido;
    // Configuramos el método y la URL a la que vamos a hacer la petición
    peticion_http.open("GET", input.value);
    // Realizar petición HTTP. Get sin envío de parámetros
    peticion_http.send();
  } else {
    alert("No tienes soporte para AJAX");
  }
}

function muestra_contenido() {
  if (peticion_http.readyState === 4) {
    // Ha recibido una respuesta...
    if (peticion_http.status === 200) {
      // ... y es válida y correcta
      let area = document.getElementById("area");
      area.value = peticion_http.responseText;
    }
  }
}

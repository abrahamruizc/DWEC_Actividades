window.onload = inicio;

function inicio() {
  let boton = document.getElementById("boton");
  boton.addEventListener("click", cargar);
}

function cargar() {
  let serie = {
    titulo: document.getElementById("titulo").value,
    director: document.getElementById("director").value,
    cadena: document.getElementById("cadena").value,
    anyo: document.getElementById("ano").value,
    terminada: document.getElementById("terminada").value,
  };

  fetch("create_serie.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(serie),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      if (data === '"ok"') {
        respuesta.style.color = "green";
      } else {
        respuesta.style.color = "red";
      }
      respuesta.innerHTML = data;
    })
    .catch((err) => console.log(err));
}

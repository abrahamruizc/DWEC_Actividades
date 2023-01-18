window.onload = inicio;

function inicio() {
  let inputtexto = document.getElementById("texto");
  inputtexto.addEventListener("click", inputTexto);
  let contrasena = document.getElementById("password");
  contrasena.addEventListener("click", inputContrasena);
  let textarea = document.getElementById("textarea");
  textarea.addEventListener("click", textArea);
  let label = document.getElementById("label");
  label.addEventListener("click", createLabel);
  let imagen = document.getElementById("imagen");
  imagen.addEventListener("click", createImage);
  let checkbox = document.getElementById("checkbox");
  checkbox.addEventListener("click", createCheckbox);
  let radio = document.getElementById("radio");
  radio.addEventListener("click", createRadio);
  let submit = document.getElementById("submit");
  submit.addEventListener("click", createSubmit);
}

function inputTexto() {
  let formulario = document.getElementById("form");
  console.log(formulario.lastElementChild);
  let pregunta = prompt("Introduce el nombre para el input");

  let input = document.createElement("input");
  input.type = "text";
  input.name = pregunta;

  if (formulario.lastElementChild == null) {
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(input);
  } else {
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(input);
  }
}

function inputContrasena() {
  let formulario = document.getElementById("form");
  console.log(formulario.lastElementChild);
  let pregunta = prompt("Introduce el nombre para el input");

  let input = document.createElement("input");
  input.type = "password";
  input.name = pregunta;

  if (formulario.lastElementChild == null) {
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(input);
  } else {
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(input);
  }
}

function textArea() {
  let formulario = document.getElementById("form");
  console.log(formulario.lastElementChild);
  let pregunta = prompt("Introduce el nombre para el textarea");

  let input = document.createElement("textarea");
  input.rows = 5;
  input.cols = 40;
  input.name = pregunta;

  if (formulario.lastElementChild == null) {
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(input);
  } else {
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(input);
  }
}

function createLabel() {
  let formulario = document.getElementById("form");
  console.log(formulario.lastElementChild);
  let pregunta = prompt("a que input va referido");
  let pregunta2 = prompt("texto que aparece en label");

  let nombres = document.getElementsByName(pregunta);
  console.log(nombres.length);

  for (let i = 0; i < nombres.length; i++) {
    if (nombres[i].name == pregunta) {
      console.log(nombres[i]);
      let label = document.createElement("label");
      label.setAttribute("for", pregunta);
      label.textContent = pregunta2;
      formulario.insertBefore(label, nombres[i]);
    }
  }
}

function createImage() {
  let formulario = document.getElementById("form");
  console.log(formulario.lastElementChild);

  let pregunta = prompt("Introduce la ruta de la imagen");

  let image = document.createElement("img");
  image.src = pregunta;
  image.height = 200;
  image.setAttribute("width", "auto");

  if (formulario.lastElementChild == null) {
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(image);
  } else {
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(image);
  }
}

function createCheckbox() {
  let formulario = document.getElementById("form");
  console.log(formulario.lastElementChild);

  let pregunta = prompt("Introduce el nombre del checkbox");
  let pregunta2 = prompt("Introduce el nombre del valor");
  let pregunta3 = prompt("Introduce el texto que lo acompaña");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = pregunta;
  checkbox.value = pregunta2;
  let label = document.createElement("label");
  label.textContent = pregunta3;

  if (formulario.lastElementChild == null) {
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(checkbox);
    formulario.appendChild(label);
  } else {
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(checkbox);
    formulario.appendChild(label);
  }
}

function createRadio() {
  let formulario = document.getElementById("form");
  console.log(formulario.lastElementChild);

  let pregunta = prompt("Introduce el nombre del radio");
  let pregunta2 = prompt("Introduce el nombre del valor");
  let pregunta3 = prompt("Introduce el texto que lo acompaña");

  let radio = document.createElement("input");
  radio.type = "radio";
  radio.name = pregunta;
  radio.value = pregunta2;
  let label = document.createElement("label");
  label.textContent = pregunta3;

  if (formulario.lastElementChild == null) {
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(radio);
    formulario.appendChild(label);
  } else {
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(radio);
    formulario.appendChild(label);
  }
}

function createSubmit() {
  let formulario = document.getElementById("form");
  console.log(formulario.lastElementChild);

  let pregunta = prompt("Introduce el nombre");
  let pregunta2 = prompt("Introduce el nombre del valor");

  let boton = document.createElement("button");
  boton.type = "submit";
  boton.name = pregunta;
  boton.value = pregunta2;
  boton.textContent = pregunta;

  if (formulario.lastElementChild == null) {
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(boton);
  } else {
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(boton);
  }
}

/* <form>
        <p><label for="nombre"> Nombre </label><input type="text"></p>
        <p><label for="grupo musica"> Grupo musica </label><input type="text"></p>
        <p><label for="ano publicacion"> Año publicación </label><input type="date"></p>
        <p><label for="tipo musica"> Tipo de música </label><input pattern="(rock)||(pop)||(punk)||(indie)" type="text"></p>
        <p><label for="localizacion"> Localización </label><input type="number"></p>
        <p><label for="Prestado"> Prestado </label><input type="checkbox"></p>
        <input type="submit">
</form> */

window.onload = inicio;

function inicio(){

let formulario = document.createElement("form");

let parrafo1 = document.createElement("p");

let label1 = document.createElement("label");
label1.setAttribute("for", "nombre");
label1.textContent = "Nombre: ";
let input1 = document.createElement("input");
input1.setAttribute("type", "text");
parrafo1.appendChild(label1);
parrafo1.appendChild(input1);


let parrafo2 = document.createElement("p");
let label2 = document.createElement("label");
label2.setAttribute("for", "grupo musica");
label2.textContent = "Grupo Musica: ";
let input2 = document.createElement("input");
input2.setAttribute("type", "text");
parrafo2.appendChild(label2);
parrafo2.appendChild(input2);

let parrafo3 = document.createElement("p");
let label3 = document.createElement("label");
label3.setAttribute("for", "ano publicacion");
label3.textContent = "Año Publicacion: ";
let input3 = document.createElement("input");
input3.setAttribute("type", "date");
parrafo3.appendChild(label3);
parrafo3.appendChild(input3);


let parrafo4 = document.createElement("p");
let label4 = document.createElement("label");
label4.setAttribute("for", "tipo musica");
label4.textContent = "Tipo de música: ";
let input4 = document.createElement("input");
input4.setAttribute("pattern", "(rock)||(pop)||(punk)||(indie)");
input4.setAttribute("type", "text");
parrafo4.appendChild(label4);
parrafo4.appendChild(input4);


let parrafo5 = document.createElement("p");
let label5 = document.createElement("label");
label5.setAttribute("for", "localizacion");
label5.textContent = "Localizacion: ";
let input5 = document.createElement("input");
input5.setAttribute("type", "number");
parrafo5.appendChild(label5);
parrafo5.appendChild(input5);

let parrafo6 = document.createElement("p");
let label6 = document.createElement("label");
label6.setAttribute("for", "Prestado");
label6.textContent = "Prestado: ";
let input6 = document.createElement("input");
input6.setAttribute("type", "checkbox");
parrafo6.appendChild(label6);
parrafo6.appendChild(input6);

let enviar = document.createElement("input");
enviar.setAttribute("type", "submit");

formulario.appendChild(parrafo1);
formulario.appendChild(parrafo2);
formulario.appendChild(parrafo3);
formulario.appendChild(parrafo4);
formulario.appendChild(parrafo5);
formulario.appendChild(parrafo6);
formulario.appendChild(enviar);

document.body.appendChild(formulario);
}
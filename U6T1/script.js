let parrafos = document.getElementsByTagName('p');
let numeroparrafos = parrafos.length;
console.log(numeroparrafos);

let segundotexto = parrafos[1].textContent;
console.log(segundotexto);

let enlaces = document.getElementsByTagName('a');
let numeroenlaces = enlaces.length;
console.log(numeroenlaces);

let primerenlace = enlaces[0].getAttribute('href');
console.log(primerenlace);

let penultimo; 
if(enlaces.length >=2){
    penultimo = enlaces[enlaces.length - 2].getAttribute('href');
    console.log(penultimo);
} else {
    //penultimo = enlaces[0].getAttribute('href');
    console.log("no tiene penultimo");
}

let numeroenlaces2= 0;
for(let i=0; i<enlaces.length; i++) {
    if(enlaces[i].getAttribute('href').includes("/wiki/Municipio")){
        numeroenlaces2++;
    }
}
console.log(numeroenlaces2);


let parrafo1 = parrafos[0].getElementsByTagName("a").length;
console.log(parrafo1);



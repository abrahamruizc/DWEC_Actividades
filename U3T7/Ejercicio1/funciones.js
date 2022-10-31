function IMC(){
    let $Peso = document.getElementById("peso").value;
    let $Altura = document.getElementById("altura").value;
    let imc = ($Peso / ($Altura * $Altura));

    document.write("IMC: " + imc);
}

function FCM(){
    let $Edad = document.getElementById("edad").value;

    document.write("FCM: " + (220 - $Edad));
}
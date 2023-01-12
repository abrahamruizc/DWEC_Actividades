class medico {
    constructor(nombre, personascuradas, hospitaldestino) {
        this.nombre = nombre;
        this.personascuradas = personascuradas;
        this.hospitaldestino = hospitaldestino;
    }

    curarPersona() {
        this.personascuradas++;
    }

    mostrarDatos() {
        alert("El médico se llama " + this.nombre + ", su hospital de destino es " + this.hospitaldestino + " y lleva curadas " + this.personascuradas + " personas");
    }
}

let var1 = new medico("abraham", 0, "Hospital1");

var1.curarPersona();

console.log(var1);

var1.mostrarDatos();


class MedicoCirujano extends medico {
    constructor(nombre, personascuradas, hospitaldestino, especialidad) {
        super();
        this.nombre = nombre;
        this.personascuradas = personascuradas;
        this.hospitaldestino = hospitaldestino;
        this.especialidad = especialidad;
    }

    mostrarDatos() {
        alert("El médico se llama " + this.nombre + ", su hospital de destino es " + this.hospitaldestino + " y lleva curadas " + this.personascuradas + " personas" + " se especializa en " + this.especialidad);
    }

}

var2 = new MedicoCirujano("Pepe", 0, "hospital2", "traumatológia");

console.log(var2);

var2.mostrarDatos();
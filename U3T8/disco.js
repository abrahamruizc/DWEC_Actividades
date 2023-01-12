function disco(){
    this.nombre = "";
    this.grupo= "";
    this.ano="";
    this.tipo ="";
    this.localizacion=0;
    this.prestado = false;

    this.escribirdisco = function(nombre, grupo, ano, tipo, localizacion) {
        this.nombre = nombre;
        this.grupo= grupo;
        this.ano=ano;
        this.tipo =tipo;
        this.localizacion=localizacion;
        this.prestado = false;
    }

    this.estanteria = function(localizacion){
        this.localizacion = localizacion;
    }

    this.cambiaPrestado = function(){
        this.prestado = true;
    }

    this.mostrar = function(){
        document.write("Nombre: "+this.nombre + "\nGrupo: " + this.grupo + "\nAño: " +this.ano + "\nTipo: " +this.tipo + "\nLocalización: " +this.localizacion + "\nPrestado: " +this.prestado);
    }

}
let objeto = new disco();
let objeto1 = new disco();
let objeto2 = new disco();
let objeto3 = new disco();
console.log(objeto);
objeto.escribirdisco("DREAM ON","Aereosmith","1973","rock","150");
console.log(objeto);
objeto.estanteria("500");
console.log(objeto);
objeto.cambiaPrestado();
console.log(objeto);
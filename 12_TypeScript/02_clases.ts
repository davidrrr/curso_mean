// tsc --noEmitOnError -w 02_clases.ts
class Persona{
    nombre: string;
    apellido1: string;
    apellido2: string;

    constructor(nombre: string, apellido1: string, apellido2: string){
        this.nombre= nombre;
        this.apellido1= apellido1;
        this.apellido2= apellido2;
    }

    stringify(): string{
        return this.nombre + " " + this.apellido1 + " "+ this.apellido2;
    }

    stringify2(): any{
        // return this.nombre + " " + this.apellido1;
        return false;
    }

}


let german = new Persona("German", "Caballero", "Rodriguez");
console.log(german.stringify());

class Ciudadano extends Persona{
    identidad: string;

    constructor(nombre: string = "", ape1: string ="", ape2: string= null, identidad: string){
        super(nombre, ape1, ape2);
        this.identidad=identidad;
    }
// Otro constructor que reciba sólo identidad, y el resto lo asigne a nulo
// sobreescribir la function stringfy que imprima lo mismo, usando la funcion padre y la identidad
/*
    constructor(identidad: string){
        super(null, null, null);
        this.identidad=identidad;
    }
*/ // No permite sobreescribir el constructor

stringify(): string{
        return super.stringify() + " "+this.identidad;
    }

}
// Crear dos objetos tipo Ciudadano y mostrar con stringify

let alguien = new Ciudadano("Pepito", "Grillo", "ooo", "3");

let alguien2: Ciudadano = new Ciudadano(null, null, null, "5");

console.log(alguien.stringify());
console.log(alguien2.stringify());

//let alguien3: Ciudadano = new Persona("null","ooo", "jj");
let alguien3: Persona = new Ciudadano(null, null, null, "8");
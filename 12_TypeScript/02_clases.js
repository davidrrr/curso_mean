var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// tsc --noEmitOnError -w 02_clases.ts
var Persona = (function () {
    function Persona(nombre, apellido1, apellido2) {
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
    }
    Persona.prototype.stringify = function () {
        return this.nombre + " " + this.apellido1 + " " + this.apellido2;
    };
    Persona.prototype.stringify2 = function () {
        // return this.nombre + " " + this.apellido1;
        return false;
    };
    return Persona;
}());
var german = new Persona("German", "Caballero", "Rodriguez");
console.log(german.stringify());
var Ciudadano = (function (_super) {
    __extends(Ciudadano, _super);
    function Ciudadano(nombre, ape1, ape2, identidad) {
        if (nombre === void 0) { nombre = ""; }
        if (ape1 === void 0) { ape1 = ""; }
        if (ape2 === void 0) { ape2 = null; }
        var _this = _super.call(this, nombre, ape1, ape2) || this;
        _this.identidad = identidad;
        return _this;
    }
    // Otro constructor que reciba sólo identidad, y el resto lo asigne a nulo
    // sobreescribir la function stringfy que imprima lo mismo, usando la funcion padre y la identidad
    /*
        constructor(identidad: string){
            super(null, null, null);
            this.identidad=identidad;
        }
    */ // No permite sobreescribir el constructor
    Ciudadano.prototype.stringify = function () {
        return _super.prototype.stringify.call(this) + " " + this.identidad;
    };
    return Ciudadano;
}(Persona));
// Crear dos objetos tipo Ciudadano y mostrar con stringify
var alguien = new Ciudadano("Pepito", "Grillo", "ooo", "3");
var alguien2 = new Ciudadano(null, null, null, "5");
console.log(alguien.stringify());
console.log(alguien2.stringify());
//let alguien3: Ciudadano = new Persona("null","ooo", "jj");
var alguien3 = new Ciudadano(null, null, null, "8");

var Persona2 = (function () {
    function Persona2(nombre, apellido1, apellido2) {
        if (nombre === void 0) { nombre = ""; }
        if (apellido1 === void 0) { apellido1 = ""; }
        if (apellido2 === void 0) { apellido2 = ""; }
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
    }
    Persona2.prototype.stringify = function () {
        return this.nombre + " " + this.apellido1 + " " + this.apellido2;
    };
    return Persona2;
}());
Persona2.totalPersonas = 0;
Persona2.totalPersonas = 5;
var germanMiDoble = new Persona2("German", "Caballero", "Rodriguez");
var germanMiDoble2 = new Persona2("German", "Caballero", "Rodriguez");
var germanMiDoble3 = new Persona2("German", "Caballero", "Rodriguez");
console.log(germanMiDoble.stringify());
germanMiDoble.nombre = "Otro mini yo";
console.log(" totalPersonas " + Persona2.totalPersonas);

let fs = require("fs");
let fichero = process.argv[2];
let contenido = fs.readFileSync(fichero);
console.log("Contenido del fichero: \n" + contenido.toString());
//console.error("Contenido del fichero: \n"+ contenido.toString());
//console.warn("Contenido del fichero: \n"+ contenido.toString());
let c = contenido.toString().split('n');
for (var i = 0; i < contenido.length; i++) {
    Number(i);
}
result = i - 1;

var lines = contenido.toString().split('n').length - 1;

console.log(result);

console.log("Nº Lineas del Contenido: " + lines);
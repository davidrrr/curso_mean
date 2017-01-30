let fs = require("fs");
let fichero = process.argv[2];
let contenido = fs.readFileSync(fichero);
console.log("Contenido del fichero: \n"+ contenido.toString());
console.error("Contenido del fichero: \n"+ contenido.toString());
console.warn("Contenido del fichero: \n"+ contenido.toString());
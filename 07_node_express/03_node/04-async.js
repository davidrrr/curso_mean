let fs = require('fs');
//let fichero = process.argv[2];
//let contenido = fs.readFileSync(fichero);

let fichero;

for (let i = 2; i < process.argv.length; i++) {
    fichero = process.argv[i];
    //fs.readFile(fichero, miFuncionAsincrona);
    fs.readFile(process.argv[i], miFuncionAsincrona.bind(fichero));
    //miFuncionAsincrona(undefined, fichero);
}


function miFuncionAsincrona(error, contenido) {
    if (error) {
        console.error("Error al ejecutar la funcion asincrona", error);
    } else {
        // let i = 0;
        //while (i < contenido.length) {
        let numfilas = contenido.toString().split('\n').length;
        //let numfilas = contenido.toString().match(/\n/g).length;
        console.log("\nFichero: " + this + "\t NumLineas: " + numfilas);
    }
}

// EJERCICIO: Cambiar el código para que el programa soporte una cantidad 
// indeterminada de ficheros
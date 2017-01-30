let fs = require('fs');

for (let i = 2; i < process.argv.length; i++) {
    //console.log(process.argv[i]);
    //console.log("\nFichero: " + process.argv[i] + "\t NumLineas: " + contenido.toString().split('\n').length);
    miFuncion(process.argv[i]);
    //miFuncionAsincrona(null, process.argv[i]);
}

function miFuncion(fich) {
    let contenido = fs.readFileSync(fich);
    let numfilas = contenido.toString().split('\n').length;
    console.log("\nFichero: " + fich + "\t NumLineas: " + numfilas);
}

function miFuncionAsincrona(error, fich) {
    if (error) {
        console.error("Error al ejecutar la funcion asincrona", error);
    } else {
        let numfilas = contenido.toString().split('\n').length;
        //let numfilas = contenido.toString().match(/\n/g).length;
        console.log("\nFichero: " + fich + "\t NumLineas: " + numfilas);
    }
}

// EJERCICIO: Cambiar el código para que el programa soporte una cantidad 
// indeterminada de ficheros de forma sincrona
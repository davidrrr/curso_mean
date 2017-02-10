var http = require("http");
var bl = require("bl");

http.get("http://www.google.es", (res) => {
    res.pipe(
        bl((error, datos) => {
            console.log("Algo ha recibido");
            // npm install bl --save-dev
            if (error) {
                return console.error("Error al procesar peticion", error);
            } else {
                let datosStr = datos.toString();
                console.log("Numero de caracteres: " + datosStr.length);
                console.log("Datos: \n" + datosStr);
            }
        })
    );
});
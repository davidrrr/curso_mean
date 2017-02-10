let http = require("http");
let url = "http://nodejs.org/dist/index.json";
let datosPlanos = "";

let callbackRes =
    (res) => {
        const codigoEstado = res.statusCode;
        const tipoContenido = res.headers["content-type"];
        console.log(tipoContenido);

        let error;
        if (codigoEstado !== 200) {
            error = new Error('Respuesta fallida.\n' + 'Codigo de estado: $(codigoEstado)');
        } else if (!/^application\/json/.test(tipoContenido)) {
            error = new Error("Contenido invalido\n" +
                "Se esperaba aplication/json pero se ha recibido $(tipoContenido)");
        } else {
            const tamano = res.headers["content-length"];
            console.log("Recibidos " + tamano + " bytes" + " por metodo " + res.method);
        }

        res.setEncoding("utf8");

        res.on("data", alRecibirDatos);
        res.on("end", () => {
            try {
                let datosParseados = JSON.parse(datosParseados);
                console.log(datosParseados);
            } catch (e) {
                console.log(e.message);
            }
        });
    };

function alRecibirDatos(bufferChunk) {
    datosPlanos += bufferChunk;
}

http.get(url, callbackRes).on("error", console.error);
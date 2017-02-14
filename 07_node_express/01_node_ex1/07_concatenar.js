var express = require("express");
var app = express();


var aResponder = (request, response) => {
    console.log("Acceso a la petición, ", request);
    response.send("Ruta: " + request.originalUrl + " Verbo: " + request.method);
}


function funcionIntermedia(request, response, next) {
    console.log("Inter ejecutando a las: " + new Date());
    next();
}

function funcionInterFin(request, response, next) {
    console.log("Inter ejecutando a las: " + new Date());
    response.send("Fin");
    next();
}

app.get("/concatenando",
    (funcionIntermedia, response) => {
        response.send("Resultados : \n\tCliente: " +
            request.params.idCliente + " \n\tFactura: " +
            request.params.idFactura + "\n" +
            JSON.stringify(request.params));
    }
);
app.get("/save/:fichero.:extension", (request, response) => {
    response.send("Ahora genero un fichero de tipo : " +
        request.params.extension);
});
app.listen(9000);

console.log("Servidor iniciado");
var miExpress = require("express");

// Instanciar
var app = miExpress();

app.get("/reservas/ere*pil", (request, response) => {
    console.log("Visto " + request.originalUrl + " Verbo: " + request.method);
    response.send("Visto " + request.originalUrl + " Verbo: " + request.method);
});

var expMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

app.get("/reservas/$expMail",
    (request, response) => {
        console.log("Visto " + request.originalUrl + " Verbo: " + request.method);
        response.send("Visto " + request.originalUrl + " Verbo: " + request.method);
    });


app.listen(9000);

console.log("Servidor express Lanzado..");
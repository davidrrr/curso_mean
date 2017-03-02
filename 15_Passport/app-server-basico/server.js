var express = require("express");
var passport = require("passport");
var EstrategiaHTTP = require("passport-http").BasicStrategy;

var app = express();

app.use(modPassport.agregarCabeceras);


app.get("/home",
    modPassport.autenticacion(),
    (request, response) => {
        console.log("Acceso permitido");
        response.send("Acceso concedido");
    });

/*
app.get("/home", (request, response) => {
    console.log("Acceso permitido");
    response.send("Acceso concedido");
});
*/

console.log("Servidor Iniciado...");
app.listen(8080);
var express = require("express");
var passport = require("passport");
var EstrategiaHTTP = require("passport-http").BasicStrategy;

var app = express();

app.get("/home", (request, response) => {
    console.log("Acceso permitido");
    respnse.send("Acceso concedido");
});

console.log("Servidor Iniciado...");
app.listen(8080);
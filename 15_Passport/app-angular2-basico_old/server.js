var express = require("express");
var passoport = require("passport");
var estrategiaHTTP = require("passport-http").BasicStrategy;

var app = express();

var agregarCabeceras = function(req, res, next) {
    res.header("Access-Cotrol-Allow-Origin", req.header.origin);
    res.header("Access-Cotrol-Allow-Headers", "Authorization");
    next();
}

app.get("/home", (request, response) => {
    console.log("Acceso permitido");
    response.send("Acceso concendido");
});

console.log("servidor iniciado ....")
app.listen(8080);
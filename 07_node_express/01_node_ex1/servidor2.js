// Importamos mucho
var miExpress= require("express");
var path = require('path');
var http = require('http').Server(app);

// Instanciar
var app = miExpress();

// Ruteo
app.get("/", peticionPrincipal);

function peticionPrincipal(peticion, respuesta){
	respuesta.sendfile(__dirname + "/publico/"+"index.html");
}

/*
var publicPath = path.resolve(__dirname, 'www');

 app.use(express.static(publicPath));

app.get("/", peticionPrincipal);

function peticionPrincipal(peticion, respuesta){
	res.sendFile('/publico/index.html', {root: publicPath});
}
*/
app.listen(9000);
console.log("Servidor lanzado..");